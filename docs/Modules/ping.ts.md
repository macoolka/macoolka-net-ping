---
title: ping.ts
nav_order: 1
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [ping (constant)](#ping-constant)

---

# ping (constant)

Check a HOST is ping live

**Signature**

```ts

export const ping: MonadFunction<string, boolean> = ...

```

**Example**

```ts
import { ping } from 'macoolka-net-ping'
import * as MN from 'macoolka-app/lib/MonadNode'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'

const result = await pipe(
  ping('baidu.com'),
  MN.map(a => assert(a))
)()
assert(E.isRight(result))
```

Added in v0.2.0
