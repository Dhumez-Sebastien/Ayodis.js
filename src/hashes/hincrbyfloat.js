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
* @param key           Key
* @param field         Field where value must be added
* @param increment     Increment value
* @param cb            Optional Callback
* @returns String      The value of field after the increment.
*/
Ayodis['hincrbyfloat'] = function (key, field, increment, cb) {
    if (!_.isNumber(increment)) {
        return this.__sendCallback('ERR value is not an integer or out of range :: Key : ' + key + ' :: Field : ' + field, null, cb);
    }

    // Check if value exist
    var out;

    // Add key if she doesn't exist
    this.__addKeyIfNotExist(key, Ayodis.__CONST.KEY.HASH);

    var fieldValue = this._key[key].getField(field);

    if (!_.isUndefined(fieldValue)) {
        if (!_.isNumber(fieldValue)) {
            return this.__sendCallback('ERR hash value is not an integer', null, cb);
        }

        out = this._key[key].setField(field, (fieldValue + increment));
    } else {
        out = this._key[key].setField(field, increment);
    }

    // Get back result
    return this.__sendCallback(null, out.toString(), cb);
};
//# sourceMappingURL=hincrbyfloat.js.map
