///<reference path='./../def/defLoader.d.ts'/>

/**
 * Returns the number of fields contained in the hash stored at key.
 *
 * @param key       Key
 * @param cb        Optional Callback
 */
Ayodis['hlen'] = function(key : string, cb ?: (err : any, res : number) => void) : number {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].countField() : 0, cb);
};