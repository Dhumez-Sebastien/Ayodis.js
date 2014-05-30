///<reference path='./../def/defLoader.d.ts'/>
/**
* Increment the specified field of an hash stored at key, and representing a floating point
* number, by the specified increment. If the field does not exist, it is set to 0 before
* performing the operation. An error is returned if one of the following conditions occur:
*
* - The field contains a value of the wrong type (not a string).
* - The current field content or the specified increment are not parsable as a double precision floating point number.
*
* The exact behavior of this command is identical to the one of the INCRBYFLOAT
* command, please refer to the documentation of INCRBYFLOAT for further information.
*
* @param hash          Hash to Store field
* @param field         Field where value must be added
* @param value         Value must be stored
* @param cb            Optional Callback
* @returns String      The value of field after the increment.
*/
Ayodis['hincrbyfloat'] = function (hash, field, value, cb) {
    if (!_.isNumber(value)) {
        return this.__sendCallback('ERR value is not an integer or out of range :: Hash : ' + hash + ' :: Field : ' + field, null, cb);
    }

    // Check if value exist
    var out;

    // Build hash
    if (!this._hash[hash]) {
        this._hash[hash] = {};
    }

    if (!_.isUndefined(this._hash[hash][field])) {
        if (!_.isNumber(this._hash[hash][field])) {
            return this.__sendCallback('ERR hash value is not an integer', null, cb);
        }

        out = this._hash[hash][field] += value;
    } else {
        out = this._hash[hash][field] = value;
    }

    // Get back result
    return this.__sendCallback(null, out.toString(), cb);
};
//# sourceMappingURL=hincrbyfloat.js.map
