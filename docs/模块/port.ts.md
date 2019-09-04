---
title: port.ts
nav_order: 2
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [PortInput (接口)](#portinput-%E6%8E%A5%E5%8F%A3)
- [isPortOpened (常量)](#isportopened-%E5%B8%B8%E9%87%8F)
- [scanHostPort (函数)](#scanhostport-%E5%87%BD%E6%95%B0)

---

# PortInput (接口)

**签名**

```ts
interface PortInput {
  hostname?: string
  port?: number
  timeout?: number
}
```

# isPortOpened (常量)

主机指定的端口是否打开

**签名**

```ts

export const isPortOpened: MonadFunction<PortInput, boolean> = ...

```

**示例**

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

v0.2.0 中添加

# scanHostPort (函数)

获取主机打开的端口

**签名**

```ts

export const scanHostPort: MonadFunction<string, number[]> = (hostname) => async () => ...

```

**示例**

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

v0.2.0 中添加
