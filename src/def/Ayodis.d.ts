/**
 * Ayodis
 *
 * @module		:: Ayodis
 * @description	:: Interface of Ayodis library.
 */

interface Ayodis {
    /**
     * Hashes
     */
    hdel : (key : string) => number;
    hexists : (hash : string, field : string, cb ?: (err : any, res : number) => void) => number;
    hget : (hash : string, field : string, cb ?: (err : any, res : string) => void) => string;
    hgetall : (key : string, cb ?: (err : any, res : string[]) => void) => string[];
    hincrby : (key : string, field : string, increment : number, cb ?: (err : any, res : number) => void) => number;
    hincrbyfloat : (key : string, field : string, increment : any, cb ?: (err : any, res : string) => void) => string;
    hkeys : (key : string, cb ?: (err : any, res : string[]) => void) => string[];
    hlen : (hash : string, cb ?: (err : any, res : number) => void) => number;
    hmget : (args : IArguments) => string[];
    hmset : (hash : string) => string;
    hset : (hash : string, field : string, value : any, cb ?: (err : any, res : number) => void) => number;
    hsetnx : (hash : string, field : string, value : any, cb ?: (err : any, res : number) => void) => number;
    hvals : (key : string, cb ?: (err : any, res : string) => void) => string[];
}