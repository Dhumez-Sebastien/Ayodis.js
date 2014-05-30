///<reference path='./../def/defLoader.d.ts'/>
/**
* Sets the specified fields to their respective values in the hash stored at
* key. This command overwrites any existing fields in the hash. If key does
* not exist, a new key holding a hash is created.
*
* The last argument can contain an optional callback.
*
* @param key       Key
*/
Ayodis['hmset'] = function (key) {
    // Reply
    var args = arguments, cb = this.__checkCallback(args[args.length - 1]), length = (_.isNull(cb)) ? args.length : (args.length - 1);

    for (var i = 1, ls = length, field = true; i < ls; i++) {
        if (field && this.__checkField(args[i])) {
            field = false;
            continue;
        } else if (field && !this.__checkField(args[i])) {
            return this.__sendCallback(this.__msg.ERR_ARGS + ' HMSET' + ' :: ' + key, null, cb);
        }

        // This is entry, jump to next
        if (!field) {
            // Check entry
            if (field && !this.__checkValue(args[i])) {
                return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER + ' :: Hash : ' + key + ' :: Field : ' + field, null, cb);
            }

            field = true;
        }
    }

    // The last item must be an entry (not a field)
    if (!field) {
        return this.__sendCallback(this.__msg.ERR_ARGS + ' HMSET' + ' :: ' + key, null, cb);
    }

    // Store field name temporary
    var fieldName;

    for (var i = 1, ls = length, field = true; i < ls; i++) {
        // Check if field is correct
        if (field) {
            fieldName = args[i];
            field = false;
            continue;
        }

        // Add key if she doesn't exist
        this.__addKeyIfNotExist(key, Ayodis.__CONST.KEY.HASH);

        // Push data
        if (!field) {
            this._key[key].setField(fieldName, args[i]);
            field = true;
        }
    }

    return this.__sendCallback(null, 'OK', cb);
};
//# sourceMappingURL=hmset.js.map
