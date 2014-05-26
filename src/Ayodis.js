"use strict";
var Ayodis = (function () {
    function Ayodis() {
    }
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
    * Returns if field is an existing field in the hash stored at key.
    *
    * @param hash      Hash to Store field
    * @param field     Field where value must be added
    * @param cb        Optional Callback
    */
    Ayodis.hexists = function (hash, field, cb) {
        var reply = (this._hash[hash] && this._hash[hash][field]) ? 1 : 0;

        // If callback, send it
        if (cb) {
            cb(null, reply);
        }

        return reply;
    };

    /**
    * Returns the value associated with field in the hash stored at key.
    *
    * @param hash      Hash to Store field
    * @param field     Field where value must be added
    * @param cb        Optional Callback
    */
    Ayodis.hget = function (hash, field, cb) {
        var reply = (this._hash[hash] && this._hash[hash][field]) ? this._hash[hash][field] : null;

        // If callback, send it
        if (cb) {
            cb(null, reply);
        }

        return reply;
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

    /**
    * Returns the number of fields contained in the hash stored at key.
    *
    * @param hash      Hash must be get
    * @param cb        Optional Callback
    */
    Ayodis.hlen = function (hash, cb) {
        // Reply
        var length = 0;

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
    };

    /**
    * Returns the values associated with the specified fields in the hash stored at key.
    * For every field that does not exist in the hash, a nil value is returned. Because
    * a non-existing keys are treated as empty hashes, running HMGET against a non-existing
    * key will return a list of null values.
    *
    * The last argument can contain an optional callback.
    *
    * @param hash      Hash must be get
    */
    Ayodis.hmget = function (hash) {
        // Reply
        var args = arguments, out = [], cb, length = args.length;

        // Check if last entry is a Callback
        if (args[args.length - 1] && !!(args[args.length - 1] && args[args.length - 1].constructor && args[args.length - 1].call && args[args.length - 1].apply)) {
            cb = args[args.length - 1];
            length--;
        }

        for (var i = 1, ls = length; i < ls; i++) {
            out.push((this._hash[hash] && this._hash[hash][args[i]]) ? this._hash[hash][args[i]] : null);
        }

        // If callback, send it
        if (cb) {
            cb(null, out);
        }

        return out;
    };

    /**
    /**
    * Sets field in the hash stored at key to value. If key does not exist, a new
    * key holding a hash is created. If field already exists in the hash, it is overwritten.
    *
    * @param hash      Hash to Store field
    * @param field     Field where value must be added
    * @param value     Value must be stored
    * @param cb        Optional Callback
    */
    Ayodis.hset = function (hash, field, value, cb) {
        // Check if value exist
        var exist = (this._hash[hash] && this._hash[hash][field]) ? 0 : 1;

        // Build hash
        if (!this._hash[hash]) {
            this._hash[hash] = {};
        }

        // Erase value
        this._hash[hash][field] = value;

        // If callback, send it
        if (cb) {
            cb(null, exist);
        }

        // Get back result
        return exist;
    };
    Ayodis._hash = {};

    Ayodis._key = {};
    return Ayodis;
})();
//# sourceMappingURL=Ayodis.js.map
