I published it, because I needed this function in few repositories at once, and figuring "where to put it" was too much effort.

There are some interesting things that could be done in this library, though.

- Have separate builds for development and production, and crash if a set of keys changed during development (HMR problems?)
  - take position from `new Error`, keep a map `invocation -> set of keys`
- [ ] Add unsafeEntries
