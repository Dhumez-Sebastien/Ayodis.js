///<reference path='./../def/defLoader.d.ts'/>
/**
* Sets field in the hash stored at key to value. If key does not exist, a new
* key holding a hash is created. If field already exists in the hash, it is overwritten.
*
* @param key       Key
* @param field     Field where value must be added
* @param value     Value must be stored
* @param cb        Optional Callback
*/
Ayodis['hset'] = function (key, field, value, cb) {
    if (!this.__checkValue(value)) {
        return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER + ' :: Hash : ' + key + ' :: Field : ' + field, null, cb);
    }

    // Check if value exist
    var exist = (this._key[key] && this._key[key].getField(field)) ? 0 : 1;

    // Add key if she doesn't exist
    this.__addKeyIfNotExist(AyodisEntryField, key);

    // Erase value in field
    this._key[key].setField(field, value);

    // Get back result
    return this.__sendCallback(null, exist, cb);
};
//# sourceMappingURL=hset.js.map
