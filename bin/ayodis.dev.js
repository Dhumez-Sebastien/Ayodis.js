/**
 * @license
 * ayodis.js - v0.0.1
 * Copyright (c) 2014-2015, Dhumez Sébastien
 * https://plus.google.com/117777107050959596079
 *
 * Compiled: 2014-05-29
 *
 * ayodis.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */
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
//# sourceMappingURL=Ayodis.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns if field is an existing field in the hash stored at key.
*
* @param hash      Hash to Store field
* @param field     Field where value must be added
* @param cb        Optional Callback
*/
Ayodis['hexists'] = function (hash, field, cb) {
    var hash = arguments[0], field = arguments[1], cb = arguments[2];

    return this.__sendCallback(null, (this._hash[hash] && this._hash[hash][field]) ? 1 : 0, cb);
};
//# sourceMappingURL=hexists.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the value associated with field in the hash stored at key.
*
* @param hash      Hash to Store field
* @param field     Field where value must be added
* @param cb        Optional Callback
*/
Ayodis['hget'] = function (hash, field, cb) {
    return this.__sendCallback(null, (this._hash[hash] && this._hash[hash][field]) ? this._hash[hash][field] : null, cb);
};
//# sourceMappingURL=hget.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the number of fields contained in the hash stored at key.
*
* @param hash      Hash must be get
* @param cb        Optional Callback
*/
Ayodis['hlen'] = function (hash, cb) {
    // Reply
    var length = 0;

    for (var key in this._hash[hash]) {
        if (this._hash[hash].hasOwnProperty(key)) {
            length++;
        }
    }

    return this.__sendCallback(null, length, cb);
};
//# sourceMappingURL=hlen.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the values associated with the specified fields in the hash stored at key.
* For every field that does not exist in the hash, a nil value is returned. Because
* a non-existing keys are treated as empty hashes, running HMGET against a non-existing
* key will return a list of null values.
*
* All arguments are get with "arguments"
*
* The last argument can contain an optional callback.
*/
Ayodis['hmget'] = function () {
    // Reply
    var args = arguments, hash = args[0] || null, out = [], cb, length = args.length;

    // Check if last entry is a Callback
    if (args[args.length - 1] && _.isFunction(args[args.length - 1])) {
        cb = args[args.length - 1];
        length--;
    }

    for (var i = 1, ls = length; i < ls; i++) {
        out.push((this._hash[hash] && this._hash[hash][args[i]]) ? this._hash[hash][args[i]] : null);
    }

    return this.__sendCallback(null, out, cb);
};
//# sourceMappingURL=hmget.js.map

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
Ayodis['hmset'] = function (hash) {
    // Reply
    var args = arguments, cb, length = args.length;

    // Check if last entry is a Callback
    if (_.isFunction(args[(args.length - 1)])) {
        cb = args[args.length - 1];
        length--;
    }

    for (var i = 1, ls = length, field = true; i < ls; i++) {
        if (field && this.__checkField(args[i])) {
            field = false;
            continue;
        } else if (field && !this.__checkField(args[i])) {
            return this.__sendCallback(this.__msg.ERR_ARGS + ' HMSET' + ' :: ' + hash, null, cb);
        }

        // This is entry, jump to next
        if (!field) {
            // Check entry
            if (field && !this.__checkValue(args[i])) {
                return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER + ' :: Hash : ' + hash + ' :: Field : ' + field, null, cb);
            }

            field = true;
        }
    }

    // The last item must be an entry (not a field)
    if (!field) {
        return this.__sendCallback(this.__msg.ERR_ARGS + ' HMSET' + ' :: ' + hash, null, cb);
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
//# sourceMappingURL=hmset.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Sets field in the hash stored at key to value. If key does not exist, a new
* key holding a hash is created. If field already exists in the hash, it is overwritten.
*
* @param hash      Hash to Store field
* @param field     Field where value must be added
* @param value     Value must be stored
* @param cb        Optional Callback
*/
Ayodis['hset'] = function (hash, field, value, cb) {
    if (!this.__checkValue(value)) {
        return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER + ' :: Hash : ' + hash + ' :: Field : ' + field, null, cb);
    }

    // Check if value exist
    var exist = (this._hash[hash] && this._hash[hash][field]) ? 0 : 1;

    // Build hash
    if (!this._hash[hash]) {
        this._hash[hash] = {};
    }

    // Erase value
    this._hash[hash][field] = value;

    // Get back result
    return this.__sendCallback(null, exist, cb);
};
//# sourceMappingURL=hset.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Sets field in the hash stored at key to value, only if field does not yet
* exist. If key does not exist, a new key holding a hash is created. If field
* already exists, this operation has no effect.
*
* @param hash      Hash to Store field
* @param field     Field where value must be added
* @param value     Value must be stored
* @param cb        Optional Callback
*/
Ayodis['hsetnx'] = function (hash, field, value, cb) {
    if (!this.__checkValue(value)) {
        return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER + ' :: Hash : ' + hash + ' :: Field : ' + field, null, cb);
    }

    // Check if value exist
    var exist = (this._hash[hash] && this._hash[hash][field]) ? 0 : 1;

    // Build hash
    if (!this._hash[hash]) {
        this._hash[hash] = {};
    }

    // If is a new field, add value
    if (exist === 1) {
        this._hash[hash][field] = value;
    }

    // Get back result
    return this.__sendCallback(null, exist, cb);
};
//# sourceMappingURL=hsetnx.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns all values in the hash stored at key.
*
* @param hash              Hash to get value
* @param cb                Optional Callback
* @returns Array           List of values in the hash, or an empty list when key does not exist.
*/
Ayodis['hvals'] = function (hash, cb) {
    if (this._hash[hash]) {
        var out = [];

        for (var field in this._hash[hash]) {
            out.push(this._hash[hash][field]);
        }

        return this.__sendCallback(null, out, cb);
    }

    return this.__sendCallback(null, [], cb);
};
//# sourceMappingURL=hvals.js.map

/**
 * Overload all method (in list after) to check args
 */
Ayodis['__overLoadCheckArgs'] = function() {
    var checkArgs = [
        {
            method : 'hexists',
            limit : 2,
            old : Ayodis.hexists
        },
        {
            method : 'hget',
            limit : 2,
            old : Ayodis.hget
        },
        {
            method : 'hlen',
            limit : 1,
            old : Ayodis.hlen
        },
        {
            method : 'hmget',
            limit : 1,
            old : Ayodis.hmget
        },
        {
            method : 'hmset',
            limit : 1,
            old : Ayodis.hmset
        },
        {
            method : 'hset',
            limit : 3,
            old : Ayodis.hset
        },
        {
            method : 'hsetnx',
            limit : 3,
            old : Ayodis.hsetnx
        },
        {
            method : 'hvals',
            limit : 1,
            old : Ayodis.hvals
        }
    ];

    /**
     * For each entry, we add method to check args before current method.
     */
    _.each(checkArgs, function(obj) {
        Ayodis[obj.method] = function () {

            console.log('Check Args (' + obj.limit + ') in method :: ' + obj.method.toUpperCase());

            for (var i = 0; i < obj.limit; i++) {
                if (!this.__checkArgs(arguments[i])) {
                    return this.__sendCallback(this.__msg.ERR_ARGS + ' ' + obj.method.toUpperCase(), null, arguments[arguments.length - 1]);
                }
            }

            return obj.old.apply(this, arguments);
        };
    });

    return this;
};

/**
 * Overload all method (in list after) to check hash field
 */
Ayodis['__overLoadCheckHashField'] = function() {
    var checkField = [
        {
            method: 'hexists',
            old: Ayodis.hexists
        },
        {
            method: 'hget',
            old: Ayodis.hget
        },
        {
            method: 'hset',
            old: Ayodis.hset
        },
        {
            method: 'hsetnx',
            old: Ayodis.hsetnx
        }
    ];

    _.each(checkField, function (obj) {
        Ayodis[obj.method] = function () {

            console.log('Check Field (' + obj.limit + ') in method :: ' + obj.method.toUpperCase());

            if (!this.__checkField(arguments[1])) {
                return this.__sendCallback(this.__msg.FIELD_MUST_BE_STRING+' :: '+arguments[1], null, arguments[2]);
            }

            return obj.old.apply(this, arguments);
        };
    });

    return this;
};

/**
 * Overload all method (in list after) to check hash
 */
Ayodis['__overLoadCheckHash'] = function() {
    var checkHash = [
        {
            method: 'hexists',
            old: Ayodis.hexists
        },
        {
            method: 'hget',
            old: Ayodis.hget
        },
        {
            method: 'hlen',
            old: Ayodis.hlen
        },
        {
            method: 'hmset',
            old: Ayodis.hmset
        },
        {
            method: 'hset',
            old: Ayodis.hset
        },
        {
            method: 'hsetnx',
            old: Ayodis.hsetnx
        },
        {
            method : 'hvals',
            old : Ayodis.hvals
        }
    ];

    _.each(checkHash, function (obj) {
        Ayodis[obj.method] = function () {

            console.log('Check Hash (' + arguments[0] + ') in method :: ' + obj.method.toUpperCase());

            if (!this.__checkHash(arguments[0])) {
                return this.__sendCallback(this.__msg.HASH_MUST_BE_STRING + ' ' + obj.method.toUpperCase(), null, arguments[arguments.length - 1]);
            }

            return obj.old.apply(this, arguments);
        };
    });

    return this;
};

Ayodis.__overLoadCheckHashField().__overLoadCheckHash().__overLoadCheckArgs();