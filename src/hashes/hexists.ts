///<reference path='./../def/defLoader.d.ts'/>

/**
 * Returns if field is an existing field in the hash stored at key.
 *
 * @param key       Key
 * @param field     Field where value must be added
 * @param cb        Optional Callback
 */
Ayodis['hexists'] = function(key : string, field : string, cb ?: (err : any, res : number) => void) : number {
    return this.__sendCallback(null, (this._key[key] && this._key[key].getField(field)) ? 1 : 0, cb);
};