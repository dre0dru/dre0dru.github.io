---
title: 'Addressables Services for the async/await workflow with UniTask'
date: '2021-04-03'
tags: [Unity, Addressables, UniTask]
draft: false
summary: Unity has great asset management system in a form of Addressables, but to properly leverage all its functionality there is a need for a robust wrapper that carefully handles all operations with proper exceptions reporting and resources cleanup. Here is my reasoning behind creating that kind of wrapper.
images: []
---

Unity has great asset management system in a form of `Addressables`, but to properly leverage all its functionality there is a need for a robust wrapper that carefully handles all operations with proper exceptions reporting and resources cleanup. Here is my reasoning behind creating that kind of wrapper.

# Why?

There are a lot of things to take care of when working with `Addressables`:

- Checking `AsyncOperationHandle` statuses.
- Releasing `AsyncOperationHandle` on operation success/failure.
- Working with morally deprecated (IMHO) Event-based Asynchronous Pattern that can potentially lead to callback hell.
- Working with modern and shiny Task-based Asynchronous Pattern that has its own share of problems when working with `Addressables`:
  - `try catch` blocks around `AsyncOperationHandle.Task` does not catch exceptions, you still have to manually check `AsyncOperationHandle.Status` and throw `AsyncOperationHandle.OperationException`:
  ```
  try
  {
  var asyncOp = Addressables.LoadAssetAsync<Sprite>(InvalidSpriteAssetReference);
  Sprite result = await asyncOp.Task;
  }
  //If any error occurs during async operation it won't be caught by catch block
  catch (Exception e)
  {
  Debug.LogError($"Error during asset loading: {e}");
  }
  ```
  - When `Addressables` profiler events sending is enabled there always will be `UnityException` when awaiting `AsyncOperationHandle.Task` (dunno why, btw).
- No compile-time type safety when using some of the `Addressables` API. For example, `Addressables.LoadAssetAsync<Sprite>(AssetKey)` expects `object` or `IResourceLocation` as its argument, but there is absolutely no guarantee that there will `Sprite` by that asset key.
- Managing resources reference counts. It seems like pretty easy task, but ensuring that all unused assets are unloaded automatically by relying on `Addressables` reference-counting can become daunting work when assets are loaded from here and there during application lifecycle.

# How?

I wanted to create a wrapper for most common `Addressables` operations that solves aforementioned problems. Here are my main goals:

- `async/await` workflow with proper structured exception handling.
  - This was achieved by using [UniTask](https://github.com/Cysharp/UniTask) package. There is a way to solve this without reliance on the `UniTask`, but I don't feel like reinventing the wheel, because `UniTask` does exactly what I need. Also, with some performance benefits because of the reduced memory allocation for tasks.
- Compile-time type safety using `AssetReference<T>` for the asset loading operations.
  - Providing generic `IAddressablesLoader<T>` that accepts `AssetReference<T>` only of the same type constraint as its arguments.
- Ensuring resources are properly loaded and unloaded after they are not needed by separating resources management in two phases:
  - Preload phase: preload and hold all required resources in `IAddressablesLoader<T>` instance. Use them in sync way during gameplay. It is also possible to load necessary resources whenever you need, but it is better to cleanly define entry point where everything is prepared beforehand.
  - Unload phase: release and loaded or individual resources from `IAddressablesLoader<T>`, e.g. when switching to another `Scene` with different set of required assets.
  - No need to worry about ref-counts since all references are concentrated in one place and it is impossible to load something twice or use asset that was not preloaded before.
- Project independence. Package can be used in almost any projects, it has a small codebase with possibility to extend it further when needs arise.

## Result

[Addressables Services](https://github.com/dre0dru/AddressablesServices) is the open-source Unity package that provides essential functionality for worry-free usage of `Addressables` in safe and predictable manner.

You can read more about usage and installation on [GitHub](https://github.com/dre0dru/AddressablesServices).
