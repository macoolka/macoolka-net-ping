/**
 * @file
 */

import * as net from 'net';
import { MonadFunction, fromReaderTask } from 'macoolka-app/lib/MonadFunction';
import * as E from 'fp-ts/lib/Either';
import * as A from 'fp-ts/lib/Array';
export interface PortInput {
    hostname?: string;
    port?: number;
    timeout?: number;
}
const isPortOpenTask = (
    { hostname = 'localhost', port = 80, timeout = 1000 }: PortInput) => async () =>
        new Promise<boolean>((resolve) => {
            const socket = new net.Socket();
            const onError = (error: unknown) => {

                socket.destroy();
                resolve(false);
            };

            socket.setTimeout(timeout);
            socket.once('error', onError);
            socket.once('timeout', onError);

            socket.connect(port, hostname, () => {
                socket.end();
                resolve(true);
            });
        });

/**
 * Check a host port is opened
 * @desczh
 * 主机指定的端口是否打开
 * @example
 * import { isPortOpened, scanHostPort } from 'mocoolka-net-ping'
 * import * as MN from 'macoolka-app/lib/MonadNode'
 * import * as E from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * const result = await pipe(
 *    isPortOpened({ port: 80, hostname: 'baidu.com' }),
 *    MN.map(a => assert(a))
 * )()
 * assert(E.isRight(result))
 *
 * @since 0.2.0
 */
export const isPortOpened: MonadFunction<PortInput, boolean> = fromReaderTask(isPortOpenTask);
/**
 * Get port number that is opened in a host
 * @desczh
 * 获取主机打开的端口
 * @example
 * import { isPortOpened, scanHostPort } from 'mocoolka-net-ping'
 * import * as MN from 'macoolka-app/lib/MonadNode'
 * import * as E from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * const result = await pipe(
 *   scanHostPort('localhost'),
 *   MN.map(a => {
 *      assert(a.length > 0)
 *     })
 *   )()
 *   assert(E.isRight(result))
 *
 * @since 0.2.0
 */
export const scanHostPort: MonadFunction<string, number[]> = (hostname) => async () => {
    const result: number[] = [];
    const as = A.range(0, 65535);
    for (const n of as) {
        const te = await isPortOpened({ port: n, hostname })();
        if (E.isLeft(te)) {
            return E.left(te.left);
        } else {
            if (te.right) {
                result.push(n);
            }

        }
    }
    return E.right(result);
};
