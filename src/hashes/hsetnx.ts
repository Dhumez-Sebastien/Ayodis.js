///<reference path='./../def/defLoader.d.ts'/>

/**
 * Sets field in the hash stored at key to value, only if field does not yet
 * exist. If key does not exist, a new key holding a hash is created. If field
 * already exists, this operation has no effect.
 *
 * @param hash      Hash to Store field
 * @param field     Field where value must be added
 * @param value     Value must be stored
 * @param cb        Optional Callback
 */
Ayodis['hsetnx'] = function(hash : string, field : string, value : any, cb ?: (err : any, res : number) => void) : number {
    if (!this.__checkValue(value)) {
        return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER+' :: Hash : '+hash+' :: Field : '+field, null, cb);
    }

    // Check if value exist
    var exist : number = (this._hash[hash] && this._hash[hash][field]) ? 0 : 1;

    // Build hash
    if (!this._hash[hash]) {
        this._hash[hash] = {};
    }

    // If is a new field, add value
    if (exist === 1) {
        this._hash[hash][field] = value;
    }

    // Get back result
    return this.__sendCallback(null, exist, cb);
};
