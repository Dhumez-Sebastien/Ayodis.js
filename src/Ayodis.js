///<reference path='./def/defLoader.d.ts'/>
/**
* Ayodis
*
* @module		:: Ayodis
* @description	:: Ayodis.js is a sample system as Key/Value.
*/
var Ayodis = (function () {
    function Ayodis() {
    }
    /**
    * Add a key if it has not been found.
    *
    * @param key           Key
    * @param type          Type of Key
    * @returns boolean     True if key is added
    * @private
    */
    Ayodis.__addKeyIfNotExist = function (key, type) {
        if (_.isUndefined(this._key[key])) {
            this._key[key] = new AyodisKey(key, type);
            return true;
        }

        return false;
    };

    /**
    * Check if all arguments are available
    *
    * @returns {boolean}
    * @private
    */
    Ayodis.__checkArgs = function () {
        var args = arguments;

        for (var i = 0, ls = args.length; i < ls; i++) {
            if (_.isUndefined(args[i])) {
                return false;
            }
        }

        return true;
    };

    Ayodis.__checkCallback = function (item) {
        if (item && _.isFunction(item)) {
            return item;
        }

        return null;
    };

    /**
    * Check if the Hash is a String
    *
    * @param hash          Hash value
    * @returns {boolean}
    * @private
    */
    Ayodis.__checkHash = function (hash) {
        return _.isString(hash);
    };

    /**
    * Check if the Field is a String
    *
    * @param field          Field value
    * @returns {boolean}
    * @private
    */
    Ayodis.__checkField = function (field) {
        return _.isString(field);
    };

    /**
    * Check if key
    * @param key       Key must be check
    * @param type      Type of Key
    * @private
    */
    Ayodis.__checkKey = function (key, type) {
        if (this._key[key] && this._key[key].getType() !== type) {
            return 'WRONGTYPE Operation against a key holding the wrong kind of value';
        }

        return 'OK';
    };

    /**
    * Check if the Value is a String || Number
    *
    * @param value          Value
    * @returns {boolean}
    * @private
    */
    Ayodis.__checkValue = function (value) {
        return _.isString(value) || _.isNumber(value);
    };

    /**
    * Send error
    * @param err           Error if she exists
    * @param val           Value if he exists
    * @param cb            Callback must be send
    * @returns {boolean}
    * @private
    */
    Ayodis.__sendCallback = function (err, val, cb) {
        if (!_.isUndefined(cb) && _.isFunction(cb)) {
            cb(err, val);
        }

        // If error, show error
        if (err) {
            console.error(err);
        }

        return val;
    };

    /**
    * If key already exists and is a string, this command appends the value at the end of the
    * string. If key does not exist it is created and set as an empty string, so APPEND will
    * be similar to SET in this special case.
    */
    Ayodis.exists = function (key) {
        if (this._key[key]) {
        } else {
            return 0;
        }
    };
    Ayodis.__msg = {
        ERR_ARGS: 'ERR wrong number of arguments for',
        FIELD_MUST_BE_STRING: 'Field must be a String',
        HASH_MUST_BE_STRING: 'Hash must be a String',
        VALUE_MUST_BE_STRING_OR_NUMBER: 'Value must be a String or Number',
        OK: 'OK'
    };

    Ayodis.__CONST = {
        KEY: {
            HASH: 'hash'
        }
    };

    Ayodis._key = {};
    return Ayodis;
})();
//# sourceMappingURL=Ayodis.js.map
