///<reference path='./def/defLoader.d.ts'/>

/**
 * Ayodis
 *
 * @module		:: Ayodis
 * @description	:: Ayodis.js is a sample system as Key/Value.
 */

class Ayodis {

    /**
     * Contain all error messages
     * @private
     */
    public static __msg : {

        ERR_ARGS : string

        HASH_MUST_BE_STRING: string
        FIELD_MUST_BE_STRING : string
        VALUE_MUST_BE_STRING_OR_NUMBER : string
        OK : string
    } = {
        ERR_ARGS : 'ERR wrong number of arguments for',

        FIELD_MUST_BE_STRING : 'Field must be a String',
        HASH_MUST_BE_STRING : 'Hash must be a String',
        VALUE_MUST_BE_STRING_OR_NUMBER : 'Value must be a String or Number',


        OK : 'OK'
    };

    /**
     * List of Hash
     */
    private static _hash : any = {};

    /**
     * List of Key
     */
    private static _key : any = {};

    /**
     * Check if all arguments are available
     *
     * @returns {boolean}
     * @private
     */
    private static __checkArgs() : boolean {
        var args : IArguments = arguments;

        for (var i = 0, ls = args.length; i < ls; i++) {
            if(_.isUndefined(args[i])) {
                return false;
            }
        }

        return true;
    }

    /**
     * Check if the Hash is a String
     *
     * @param hash          Hash value
     * @returns {boolean}
     * @private
     */
    private static __checkHash(hash : string) : boolean {
        return _.isString(hash);
    }

    /**
     * Check if the Field is a String
     *
     * @param field          Field value
     * @returns {boolean}
     * @private
     */
    private static __checkField(field : string) : boolean {
        return _.isString(field);
    }

    /**
     * Check if the Value is a String || Number
     *
     * @param value          Value
     * @returns {boolean}
     * @private
     */
    private static __checkValue(value : string) : boolean {
        return _.isString(value) || _.isNumber(value);
    }

    /**
     * Send error
     * @param err           Error if she exists
     * @param val           Value if he exists
     * @param cb            Callback must be send
     * @returns {boolean}
     * @private
     */
    private static __sendCallback(err : any, val : any, cb : (err : any, res : any) => void) : any {
        if (cb) {
            cb(err, val);
        }

        // If error, show error
        if (err) {
            console.error(err);
        }

        return val;
    }



    /**
     * If key already exists and is a string, this command appends the value at the end of the
     * string. If key does not exist it is created and set as an empty string, so APPEND will
     * be similar to SET in this special case.
     */
    public static exists(key : string) : number {
        if (this._key[key]) {

        } else {
            return 0;
        }
    }

    /**
     * Removes the specified fields from the hash stored at key. Specified fields that do
     * not exist within this hash are ignored. If key does not exist, it is treated as an
     * empty hash and this command returns 0.
     *
     * @param hash      Hash to Store field
     * @param field     Field where value must be added
     * @param cb        Optional Callback
     */
    public static hdel(hash : string, field : string, cb ?: (err : any, res : number) => void) : number {
        // Reply
        var exist : number = 0;

        // Check if hash/field exist and remove
        if ((this._hash[hash] && this._hash[hash][field])) {
            exist = 1;

            delete (this._hash[hash][field]);
        }

        // If callback, send it
        if (cb) {
            cb(null, exist);
        }

        return exist;
    }

    /**
     * Returns if field is an existing field in the hash stored at key.
     *
     * @param hash      Hash to Store field
     * @param field     Field where value must be added
     * @param cb        Optional Callback
     */
    public static hexists(hash : string, field : string, cb ?: (err : any, res : number) => void) : number {
        var reply : number = (this._hash[hash] && this._hash[hash][field]) ? 1 : 0;

        // If callback, send it
        if (cb) {
            cb(null, reply);
        }

        return reply;
    }

    /**
     * Returns the value associated with field in the hash stored at key.
     *
     * @param hash      Hash to Store field
     * @param field     Field where value must be added
     * @param cb        Optional Callback
     */
    public static hget(hash : string, field : string, cb ?: (err : any, res : string) => void) : string {
        var reply : string = (this._hash[hash] && this._hash[hash][field]) ? this._hash[hash][field] : null;

        // If callback, send it
        if (cb) {
            cb(null, reply);
        }

        return reply;
    }

    /**
     * Returns all fields and values of the hash stored at key. In the returned value, every
     * field name is followed by its value, so the length of the reply is twice the size of
     * the hash.
     *
     * @param hash      Hash must be get
     * @param cb        Optional Callback
     */
    public static hgetall(hash : string, cb ?: (err : any, res : string[]) => void) : string[] {
        // Reply
        var out : string[] = [];

        // Add key & value into array
        for (var key in this._hash[hash]) {
            out.push(key);
            out.push(this._hash[hash][key]);
        }

        // If callback, send it
        if (cb) {
            cb(null, out);
        }

        return out;
    }

    /**
     * Returns all field names in the hash stored at key.
     *
     * @param hash      Hash must be get
     * @param cb        Optional Callback
     */
    public static hkeys(hash : string, cb ?: (err : any, res : string[]) => void) : string[] {
        // Reply
        var out : string[] = [];

        // Add key & value into array
        for (var key in this._hash[hash]) {
            out.push(key);
        }

        // If callback, send it
        if (cb) {
            cb(null, out);
        }

        return out;
    }

    /**
     * Returns the number of fields contained in the hash stored at key.
     *
     * @param hash      Hash must be get
     * @param cb        Optional Callback
     */
    public static hlen(hash : string, cb ?: (err : any, res : number) => void) : number {
        // Reply
        var length : number = 0;

        // Count fields
        for (var key in this._hash[hash]) {
            if (this._hash[hash].hasOwnProperty(key)) {
                length++;
            }
        }

        // If callback, send it
        if (cb) {
            cb(null, length);
        }

        return length;
    }

    /**
     * Sets the specified fields to their respective values in the hash stored at
     * key. This command overwrites any existing fields in the hash. If key does
     * not exist, a new key holding a hash is created.
     *
     * The last argument can contain an optional callback.
     *
     * @param hash      Hash must be get
     */
    public static hmset(hash : string) : string {
        // Reply
        var args : IArguments = arguments,
            cb : (err : any, res : string) => void,
            errMsg : string = this.__msg.ERR_ARGS+' HMSET',
            length : number = args.length;

        // Check if last entry is a Callback
        if (_.isFunction(args[args.length -1])) {
            cb = args[args.length -1];
            length--;
        }

        // Checks if the inputs are valid
        for (var i : number = 1, ls : number = length, field : boolean = true; i < ls; i++) {
            // Check if field is correct
            if (field && Object.prototype.toString.call(args[i]) == '[object String]') {
                field = false;
                continue;
            } else if (field && Object.prototype.toString.call(args[i]) != '[object String]') {

                // If callback, send it
                if (cb) {
                    cb(errMsg, null);
                }

                return errMsg;
            }

            // This is entry, jump to next
            if (!field) {
                field = true;
            }
        }

        // The last item must be an entry (not a field)
        if (!field) {
            // If callback, send it
            if (cb) {
                cb(errMsg, null);
            }

            return errMsg;
        }


        // Store field name temporary
        var fieldName : string;

        // Read all args (the first arguments is the hash)
        for (var i : number = 1, ls : number = length, field : boolean = true; i < ls; i++) {
            // Check if field is correct
            if (field && Object.prototype.toString.call(args[i]) == '[object String]') {
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

        // If callback, send it
        if (cb) {
            cb(null, 'OK');
        }

        return 'OK';
    }



}

