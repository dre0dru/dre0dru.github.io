---
title: 'Local Storage - a set of utility classes for managing local data stored on device'
date: '2021-05-08'
tags: [Unity, Data Management]
draft: false
summary: Sometimes there is a need arises for saving data locally on a device, be it server data caching, managing game progress for offline games, or storing user preferences. First, you write necessary data in plain text, then you switch to JSON for readability, after that you want to protect your files from curious users. Next time you notice that your data takes too much space on a device, so you want to compress your data. The improvement process can go indefinitely, so here is my take on solving that kind of problems.
images: []
---

Sometimes there is a need arises for saving data locally on a device, be it server data caching, managing game progress for offline games, or storing user preferences. First, you write necessary data in plain text, then you switch to JSON for readability, after that you want to protect your files from curious users. Next time you notice that your data takes too much space on a device, so you want to compress your data. The improvement process can go indefinitely, so here is my take on solving that kind of problems.

# Why?

My first attempt was the creation of an inheritance hierarchy where each next inheritor will override data processing (serialization/deserialization) methods with calling base class implementations. E.g, base `JsonStorage` class, that uses Unity `JsonUtility`, then `EncryptedJsonStorage` that encrypts resulting JSON. But then I needed to change JSON serialization to `NewtonSoftJson`. I had to create two new classes: `NewtonSoftJsonStorage` and `EncryptedNewtonSoftJsonStorage` essentially copy-pasting most of the code and changing only a few lines. It doesn't sound like an extendable and maintainable set of classes.

# How?

Since inheritance doesn't work, what options do we have? Composition, and to be more precise - `decorator` pattern. The basic idea is following:

- Separate and abstract three processes: serialization/deserialization, saving/loading and data transformation.
  - `ISerializationProvider` for serialization and deserialization. It can be any format that suits one's need, e.g. plain text, JSON, binary, XML.
  - `IDataTransform` for applying optional data transformations during serialization/deserialization, e.g. data encryption or compression.
  - `IFileStorage` with for saving and loading data to disk on device.
  - `IPlayerPrefsStorage` for saving and loading data to [Unity](https://docs.unity3d.com/ScriptReference/PlayerPrefs.html) `PlayerPrefs`.
- `IFileStorage` and `IPlayerPrefsStorage` are just `facade` for `ISerializationProvider` with few utility methods corresponding their purpose:
  - `IFileStorage` provides API for working with file system on device.
  - `IPlayerPrefsStorage` provides API for working with `PlayerPrefs`. Basically, it mirrors `PlayerPrefs` API, but adds ability to save generic data to `PlayerPrefs` without need to manually convert it to string representation.

My main inspiration was how `Stream` API implemented in `c#` where some streams will use underlying streams passed in its constructor.

## Result

[Local Storage](https://github.com/dre0dru/LocalStorage) is the open-source Unity package that provides a set of classes for working with local data on device including data encryption and compression.

You can read more about usage and installation on [GitHub](https://github.com/dre0dru/LocalStorage).
