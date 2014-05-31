///<reference path='./../def/defLoader.d.ts'/>

/**
 * Sets field in the hash stored at key to value, only if field does not yet
 * exist. If key does not exist, a new key holding a hash is created. If field
 * already exists, this operation has no effect.
 *
 * @param key       Key
 * @param field     Field where value must be added
 * @param value     Value must be stored
 * @param cb        Optional Callback
 */
Ayodis['hsetnx'] = function(key : string, field : string, value : any, cb ?: (err : any, res : number) => void) : number {
    if (!this.__checkValue(value)) {
        return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER+' :: Key : '+key+' :: Field : '+field, null, cb);
    }

    // Check if value exist
    var exist : number = (this._key[key] && this._key[key].getField(field)) ? 0 : 1;

    // Add key if she doesn't exist
    this.__addKeyIfNotExist(AyodisEntryField, key);

    // If is a new field, add value
    if (exist === 1) {
        this._key[key].setField(field, value);
    }

    // Get back result
    return this.__sendCallback(null, exist, cb);
};
