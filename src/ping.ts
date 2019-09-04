/**
 * @file
 */
import _ping = require('ping');
import { MonadFunction, fromReaderTask } from 'macoolka-app/lib/MonadFunction';
/**
 * @ignore
 */
export interface PingResponse {
    /**
     * The input IP address or HOST
     */
    host: string;
    /**
     * Target IP address
     */
    numeric_host: string;
    /**
     * existed host
     */
    alive: boolean;
    /**
     * Raw stdout from system ping
     */
    output: string;
    /**
     * Time (float) in ms for first successful ping response
     */
    time: number;
    /**
     *  Array of Time (float) in ms for each ping response
     */
    times: number[];
    /**
     *  Minimum time for collection records
     */
    min: string;
    /**
     * Maximum time for collection records
     */
    max: string;
    /**
     * Average time for collection records
     */
    avg: string;
    /**
     * Standard deviation time for collected records
     */
    stddev: string;
}

const pingTask = (host: string) => async () => {
    const a = await _ping.promise.probe(host);
    return a.alive;
};
/**
 * Check a HOST is ping live
 * @desczh
 * 主机是否能ping通
 * @example
 * import { ping } from 'macoolka-net-ping'
 * import * as MN from 'macoolka-app/lib/MonadNode'
 * import * as E from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * const result = await pipe(
 *   ping('baidu.com'),
 *   MN.map(a => assert(a))
 * )()
 * assert(E.isRight(result))
 * @since 0.2.0
 */
export const ping: MonadFunction<string, boolean> = fromReaderTask(pingTask);
