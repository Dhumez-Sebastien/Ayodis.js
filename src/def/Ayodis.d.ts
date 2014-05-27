/**
 * Ayodis
 *
 * @module		:: Ayodis
 * @description	:: Interface of Ayodis library.
 */

interface Ayodis {
    hsetnx : (hash : string, field : string, value : any, cb ?: (err : any, res : number) => void) => number;
}