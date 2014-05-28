///<reference path='./../def/defLoader.d.ts'/>

/**
 * Returns if field is an existing field in the hash stored at key.
 *
 * @param hash      Hash to Store field
 * @param field     Field where value must be added
 * @param cb        Optional Callback
 */
Ayodis['hexists'] = function(hash : string, field : string, cb ?: (err : any, res : number) => void) : number {

    if (!this.__checkHash(arguments[0])) {
        return this.__sendCallback(this.__msg.HASH_MUST_BE_STRING+' :: '+arguments[0], null, arguments[2]);
    }

    if (!this.__checkField(arguments[1])) {
        return this.__sendCallback(this.__msg.FIELD_MUST_BE_STRING+' :: '+arguments[1], null, arguments[2]);
    }

    var hash : string = arguments[0],
        field : string = arguments[1],
        cb : (err : any, res : number) => void = arguments[2];

    return this.__sendCallback(null, (this._hash[hash] && this._hash[hash][field]) ? 1 : 0, cb);
};