import { ping } from '../ping'
import * as MN from 'macoolka-app/lib/MonadNode'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import assert from 'assert'
describe('ping', () => {
    it('ping ok', async () => {
        const result = await pipe(
            ping('baidu.com'),
            MN.map(a => assert(a))
        )()
        assert(E.isRight(result))

    }, 100 * 1000)
    it('ping no ok', async () => {
        const result = await pipe(
            ping('nodejs.com1'),
            MN.map(a => assert(a === false))
        )()
        assert(E.isRight(result))

    }, 100 * 1000)
})
