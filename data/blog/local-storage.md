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

Since inheritance doesn't work, what options do we have? Composition, and to be more precise - decorator pattern. The basic idea is following:

- Separate and abstract two processes: serialization/deserialization and saving/loading.
  - `ISerializationProvider` for serialization and deserialization. It can be any format that suits one's need, e.g. plain text, JSON, binary, XML.
  - `IFileProvider` for saving and loading. Abstracting data read/write process to allow data preprocessing steps.
- Create one generic class that can accept any combination of `ISerializationProvider` and `IFileProvider` for managing data in a uniform way across the solution.
  - `IStorage` implementations that accept aforementioned interfaces in the constructor and use them for data saving/loading with few utility methods like deleting files and checking for existence.

My main inspiration was how `Stream` API implemented in `c#` where some streams will use underlying streams passed in its constructor.

## Result

[Local Storage](https://github.com/dre0dru/LocalStorage) is the open-source Unity package that provides a set of classes for working with local data on device including data encryption and compression.

You can read more about usage and installation on [GitHub](https://github.com/dre0dru/LocalStorage).
