///<reference path='./../def/defLoader.d.ts'/>
/**
* Increments the number stored at field in the hash stored at key by increment. If
* key does not exist, a new key holding a hash is created. If field does not exist
* the value is set to 0 before the operation is performed.
*
* The range of values supported by HINCRBY is limited to 64 bit signed integers.
*
* @param hash          Hash to Store field
* @param field         Field where value must be added
* @param value         Value must be stored
* @param cb            Optional Callback
* @returns Integer     The value at field after the increment operation
*/
Ayodis['hincrby'] = function (hash, field, value, cb) {
    if (!_.isNumber(value) || !_.isInteger(value)) {
        return this.__sendCallback('ERR value is not an integer or out of range :: Hash : ' + hash + ' :: Field : ' + field, null, cb);
    }

    // Check if value exist
    var out;

    // Build hash
    if (!this._hash[hash]) {
        this._hash[hash] = {};
    }

    if (!_.isUndefined(this._hash[hash][field])) {
        if (!_.isNumber(this._hash[hash][field]) || !_.isInteger(value)) {
            return this.__sendCallback('ERR hash value is not an integer', null, cb);
        }

        out = this._hash[hash][field] += value;
    } else {
        out = this._hash[hash][field] = value;
    }

    // Get back result
    return this.__sendCallback(null, out, cb);
};
//# sourceMappingURL=hincrby.js.map
