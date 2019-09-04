import { isPortOpened, scanHostPort } from '../port'
import * as MN from 'macoolka-app/lib/MonadNode'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import assert from 'assert'
describe('port', () => {
    it('isPortOpened', async () => {
        const result = await pipe(
            isPortOpened({ port: 80, hostname: 'baidu.com' }),
            MN.map(a => assert(a))
        )()
        assert(E.isRight(result))

    })
    it('scanHostPort', async () => {
        const result = await pipe(
            scanHostPort('localhost'),
            MN.map(a => {
                assert(a.length > 0)
            })
        )()
        assert(E.isRight(result))

    }, 1000 *  60)

})