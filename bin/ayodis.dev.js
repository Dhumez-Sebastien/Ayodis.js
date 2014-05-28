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

    /**
    * Removes the specified fields from the hash stored at key. Specified fields that do
    * not exist within this hash are ignored. If key does not exist, it is treated as an
    * empty hash and this command returns 0.
    *
    * @param hash      Hash to Store field
    * @param field     Field where value must be added
    * @param cb        Optional Callback
    */
    Ayodis.hdel = function (hash, field, cb) {
        // Reply
        var exist = 0;

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
    };

    /**
    * Returns all fields and values of the hash stored at key. In the returned value, every
    * field name is followed by its value, so the length of the reply is twice the size of
    * the hash.
    *
    * @param hash      Hash must be get
    * @param cb        Optional Callback
    */
    Ayodis.hgetall = function (hash, cb) {
        // Reply
        var out = [];

        for (var key in this._hash[hash]) {
            out.push(key);
            out.push(this._hash[hash][key]);
        }

        // If callback, send it
        if (cb) {
            cb(null, out);
        }

        return out;
    };

    /**
    * Returns all field names in the hash stored at key.
    *
    * @param hash      Hash must be get
    * @param cb        Optional Callback
    */
    Ayodis.hkeys = function (hash, cb) {
        // Reply
        var out = [];

        for (var key in this._hash[hash]) {
            out.push(key);
        }

        // If callback, send it
        if (cb) {
            cb(null, out);
        }

        return out;
    };
    Ayodis.__msg = {
        ERR_ARGS: 'ERR wrong number of arguments for',
        FIELD_MUST_BE_STRING: 'Field must be a String',
        HASH_MUST_BE_STRING: 'Hash must be a String',
        VALUE_MUST_BE_STRING_OR_NUMBER: 'Value must be a String or Number',
        OK: 'OK'
    };

    Ayodis._hash = {};

    Ayodis._key = {};
    return Ayodis;
})();
//

//# sourceMappingURL=ayodis.dev.js.map