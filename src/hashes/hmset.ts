///<reference path='./../def/defLoader.d.ts'/>

/**
 * Sets the specified fields to their respective values in the hash stored at
 * key. This command overwrites any existing fields in the hash. If key does
 * not exist, a new key holding a hash is created.
 *
 * The last argument can contain an optional callback.
 *
 * @param hash      Hash must be get
 */
Ayodis['hmset'] = function(hash : string) : string {
    // Reply
    var args : IArguments = arguments,
        cb : (err : any, res : string) => void,
        length : number = args.length;

    // Check if last entry is a Callback
    if (_.isFunction(args[(args.length -1)])) {
        cb = args[args.length -1];
        length--;
    }

    /**
     * Check arguments
     */
    for (var i : number = 1, ls : number = length, field : boolean = true; i < ls; i++) {

        if (field && this.__checkField(args[i])) {
            field = false;
            continue;
        } else if (field && !this.__checkField(args[i])) {
            return this.__sendCallback(this.__msg.ERR_ARGS+' HMSET'+' :: '+hash, null, cb);
        }

        // This is entry, jump to next
        if (!field) {
            // Check entry
            if (field && !this.__checkValue(args[i])) {
                return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER+' :: Hash : '+hash+' :: Field : '+field, null, cb);
            }

            field = true;
        }
    }

    // The last item must be an entry (not a field)
    if (!field) {
        return this.__sendCallback(this.__msg.ERR_ARGS+' HMSET'+' :: '+hash, null, cb);
    }


    // Store field name temporary
    var fieldName : string;

    // Read all args (the first arguments is the hash)
    for (var i : number = 1, ls : number = length, field : boolean = true; i < ls; i++) {
        // Check if field is correct
        if (field) {
            fieldName = args[i];
            field = false;
            continue;
        }

        // Check if hash exist
        if (!this._hash[hash]) {
            this._hash[hash] = {};
        }

        // Push data
        if (!field) {
            this._hash[hash][fieldName] = args[i];
            field = true;
        }
    }


    return this.__sendCallback(null, 'OK', cb);
};