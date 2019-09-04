---
title: ping.ts
nav_order: 1
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [ping (常量)](#ping-%E5%B8%B8%E9%87%8F)

---

# ping (常量)

主机是否能 ping 通

**签名**

```ts

export const ping: MonadFunction<string, boolean> = ...

```

**示例**

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

v0.2.0 中添加
