///<reference path='./../def/defLoader.d.ts'/>

/**
 * Returns the value associated with field in the hash stored at key.
 *
 * @param hash      Hash to Store field
 * @param field     Field where value must be added
 * @param cb        Optional Callback
 */
Ayodis['hget'] = function(hash : string, field : string, cb ?: (err : any, res : string) => void) : string {
    if (!this.__checkHash(hash)) {
        return this.__sendCallback(this.__msg.HASH_MUST_BE_STRING+' :: '+hash, null, cb);
    }

    if (!this.__checkField(field)) {
        return this.__sendCallback(this.__msg.FIELD_MUST_BE_STRING+' :: '+field, null, cb);
    }

    return this.__sendCallback(null, (this._hash[hash] && this._hash[hash][field]) ? this._hash[hash][field] : null, cb);
};