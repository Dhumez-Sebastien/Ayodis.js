///<reference path='./../def/defLoader.d.ts'/>

/**
 * Increments the number stored at field in the hash stored at key by increment. If
 * key does not exist, a new key holding a hash is created. If field does not exist
 * the value is set to 0 before the operation is performed.
 *
 * The range of values supported by HINCRBY is limited to 64 bit signed integers.
 *
 * @param key           Key
 * @param field         Field where value must be added
 * @param increment     Increment value
 * @param cb            Optional Callback
 * @returns Integer     The value at field after the increment operation
 */
Ayodis['hincrby'] = function(key : string, field : string, increment : number, cb ?: (err : any, res : number) => void) : number {
    if (!_.isNumber(increment) || !_.isInteger(increment)) {
        return this.__sendCallback('ERR value is not an integer or out of range :: Key : '+key+' :: Field : '+field, null, cb);
    }

    // Add key if she doesn't exist
    this.__addKeyIfNotExist(AyodisEntryField, key);

    var fieldValue : any = this._key[key].getField(field),
        out : number;

    if (!_.isUndefined(fieldValue)) {
        if (!_.isNumber(fieldValue) || !_.isInteger(increment)) {
            return this.__sendCallback('ERR hash value is not an integer', null, cb);
        }

        out = this._key[key].setField(field, (fieldValue + increment));
    } else {
        out = this._key[key].setField(field, increment);
    }

    // Get back result
    return this.__sendCallback(null, out, cb);
};