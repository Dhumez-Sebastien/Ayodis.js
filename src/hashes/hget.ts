///<reference path='./../def/defLoader.d.ts'/>

/**
 * Returns the value associated with field in the hash stored at key.
 *
 * @param hash      Hash to Store field
 * @param field     Field where value must be added
 * @param cb        Optional Callback
 */
Ayodis['hget'] = function(hash : string, field : string, cb ?: (err : any, res : string) => void) : string {
    return this.__sendCallback(null, (this._hash[hash] && this._hash[hash][field]) ? this._hash[hash][field] : null, cb);
};