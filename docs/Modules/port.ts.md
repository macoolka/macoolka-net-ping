---
title: port.ts
nav_order: 2
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [PortInput (interface)](#portinput-interface)
- [isPortOpened (constant)](#isportopened-constant)
- [scanHostPort (function)](#scanhostport-function)

---

# PortInput (interface)

**Signature**

```ts
interface PortInput {
  hostname?: string
  port?: number
  timeout?: number
}
```

# isPortOpened (constant)

Check a host port is opened

**Signature**

```ts

export const isPortOpened: MonadFunction<PortInput, boolean> = ...

```

**Example**

```ts
import { isPortOpened, scanHostPort } from 'mocoolka-net-ping'
import * as MN from 'macoolka-app/lib/MonadNode'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'

const result = await pipe(
  isPortOpened({ port: 80, hostname: 'baidu.com' }),
  MN.map(a => assert(a))
)()
assert(E.isRight(result))
```

Added in v0.2.0

# scanHostPort (function)

Get port number that is opened in a host

**Signature**

```ts

export const scanHostPort: MonadFunction<string, number[]> = (hostname) => async () => ...

```

**Example**

```ts
import { isPortOpened, scanHostPort } from 'mocoolka-net-ping'
import * as MN from 'macoolka-app/lib/MonadNode'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'

const result = await pipe(
  scanHostPort('localhost'),
  MN.map(a => {
    assert(a.length > 0)
  })
)()
assert(E.isRight(result))
```

Added in v0.2.0
