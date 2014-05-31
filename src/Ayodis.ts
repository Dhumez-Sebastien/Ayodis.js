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

        KEY_MUST_BE_STRING: string
        FIELD_MUST_BE_STRING : string
        VALUE_MUST_BE_STRING_OR_NUMBER : string
        OK : string
    } = {
        ERR_ARGS : 'ERR wrong number of arguments for',

        FIELD_MUST_BE_STRING : 'Field must be a String',
        KEY_MUST_BE_STRING : 'Key must be a String',
        VALUE_MUST_BE_STRING_OR_NUMBER : 'Value must be a String or Number',


        OK : 'OK'
    };

    public static __CONST : {
        KEY : {
            HASH : string
            SET : string
        }
    } = {
        KEY : {
            HASH : 'hash',
            SET : 'set'
        }
    };

    /**
     * List of Key
     */
    private static _key : any = {};

    /**
     * Add a key if it has not been found.
     *
     * @param key           Key
     * @param keyClass      Class must be used to build key
     * @returns boolean     True if key is added
     * @private
     */
    private static __addKeyIfNotExist(keyClass : any, key : string) : boolean {
        if (_.isUndefined(this._key[key])) {
            this._key[key] = new keyClass(key);
            return true;
        }

        return false;
    }

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

    private static __checkCallback(item : any) : any {
        if (item && _.isFunction(item)) {
            return item;
        }

        return null;
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
     * Check if key
     * @param key       Key must be check
     * @param type      Type of Key
     * @private
     */
    private static __checkKey(key : string, type : string) : string {
        if (!_.isUndefined(this._key[key]) && this._key[key].getType() !== type) {
            return 'WRONGTYPE Operation against a key holding the wrong kind of value';
        }

        return 'OK';
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
        if (!_.isUndefined(cb) && _.isFunction(cb)) {
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
}

