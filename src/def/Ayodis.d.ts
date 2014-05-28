/**
 * Ayodis
 *
 * @module		:: Ayodis
 * @description	:: Interface of Ayodis library.
 */

interface Ayodis {
    hexists : (hash : string, field : string, cb ?: (err : any, res : number) => void) => number;
    hget : (hash : string, field : string, cb ?: (err : any, res : string) => void) => string;
    hlen : (hash : string, cb ?: (err : any, res : number) => void) => number;
    hmget : (args : IArguments) => string[];
    hmset : (hash : string) => string;
    hset : (hash : string, field : string, value : any, cb ?: (err : any, res : number) => void) => number;
    hsetnx : (hash : string, field : string, value : any, cb ?: (err : any, res : number) => void) => number;
}