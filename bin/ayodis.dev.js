/**
 * @license
 * ayodis.js - v0.0.1
 * Copyright (c) 2014-2015, Dhumez Sébastien
 * https://plus.google.com/117777107050959596079
 *
 * Compiled: 2014-05-31
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
    * Add a key if it has not been found.
    *
    * @param key           Key
    * @param keyClass      Class must be used to build key
    * @returns boolean     True if key is added
    * @private
    */
    Ayodis.__addKeyIfNotExist = function (keyClass, key) {
        if (_.isUndefined(this._key[key])) {
            this._key[key] = new keyClass(key);
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
        if (!_.isUndefined(this._key[key]) && this._key[key].getType() !== type) {
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
        KEY_MUST_BE_STRING: 'Key must be a String',
        VALUE_MUST_BE_STRING_OR_NUMBER: 'Value must be a String or Number',
        OK: 'OK'
    };

    Ayodis.__CONST = {
        KEY: {
            HASH: 'hash',
            SET: 'set'
        }
    };

    Ayodis._key = {};
    return Ayodis;
})();
//# sourceMappingURL=Ayodis.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Class to build main entry into Ayodis
*/
var AyodisMainEntry = (function () {
    /**
    * Basic constructor
    *
    * @param keyName   Name of Key
    * @param keyType   Type of Key
    */
    function AyodisMainEntry(keyName, keyType) {
        this._keyName = keyName;
        this._type = keyType;
    }
    AyodisMainEntry.prototype.getType = function () {
        return this._type;
    };
    return AyodisMainEntry;
})();
//# sourceMappingURL=AyodisMainEntry.js.map

///<reference path='./../def/defLoader.d.ts'/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Class to build entry into Ayodis
*/
var AyodisEntryField = (function (_super) {
    __extends(AyodisEntryField, _super);
    /**
    * Basic constructor.
    *
    * @param keyName   Name of Key
    */
    function AyodisEntryField(keyName) {
        _super.call(this, keyName, Ayodis.__CONST.KEY.HASH);
        /**
        * Field are used by "Hash". They contain some value as member :: this._field['test'] = 10.
        */
        this._field = {};
    }
    /**
    * Returns the number of fields.
    */
    AyodisEntryField.prototype.countField = function () {
        return _.size(this._field);
    };

    /**
    * Returns all the key fields.
    */
    AyodisEntryField.prototype.getAllField = function () {
        var out = [];

        for (var key in this._field) {
            out.push(key);
        }

        return out;
    };

    /**
    * Returns all fields followed by values.
    */
    AyodisEntryField.prototype.getAllFieldAndValue = function () {
        var out = [];

        for (var key in this._field) {
            out.push(key);
            out.push(this._field[key]);
        }

        return out;
    };

    /**
    * Returns all field values.
    */
    AyodisEntryField.prototype.getAllFieldValue = function () {
        var out = [];

        for (var key in this._field) {
            out.push(this._field[key]);
        }

        return out;
    };

    /**
    * Return specific fields.
    *
    * @param field     Field must be found
    */
    AyodisEntryField.prototype.getField = function (field) {
        return this._field[field];
    };

    /**
    * Remove specific fields.
    *
    * @param field     Field must be removed
    */
    AyodisEntryField.prototype.removeField = function (field) {
        if (_.isUndefined(this._field[field])) {
            return false;
        }

        delete (this._field[field]);

        return true;
    };

    /**
    * Apply a value to a field and return value.
    *
    * @param field     Field must be found
    * @param value     Value must be apply
    */
    AyodisEntryField.prototype.setField = function (field, value) {
        this._field[field] = value;
        return this._field[field];
    };
    return AyodisEntryField;
})(AyodisMainEntry);
//# sourceMappingURL=AyodisEntryField.js.map

///<reference path='./../def/defLoader.d.ts'/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Class to build entry into Ayodis
*/
var AyodisEntryMember = (function (_super) {
    __extends(AyodisEntryMember, _super);
    /**
    * Basic constructor.
    *
    * @param keyName   Name of Key
    */
    function AyodisEntryMember(keyName) {
        _super.call(this, keyName, Ayodis.__CONST.KEY.SET);
        /**
        * Member is used by "Set". This is an array who contain some value.
        */
        this._member = [];
    }
    /**
    * Adds a value if it has not been found
    *
    * @param value     Value must be added
    */
    AyodisEntryMember.prototype.addIfValueNotExist = function (value) {
        if (_.indexOf(this._member, value) === -1) {
            this._member.push(value);
            return true;
        }
        return false;
    };

    /**
    * Returns all members
    */
    AyodisEntryMember.prototype.getAllMembers = function () {
        var out = [];

        for (var i = 0, ls = this._member.length; i < ls; i++) {
            out.push(this._member[i]);
        }

        return out;
    };

    /**
    * Removes a value if she has been found
    *
    * @param value     Value must be removed
    */
    AyodisEntryMember.prototype.removeValue = function (value) {
        var index = _.indexOf(this._member, value);

        // Check if value has been found found
        if (index === -1) {
            return false;
        }

        // Remove item from member
        this._member.splice(index, 1);

        return true;
    };
    return AyodisEntryMember;
})(AyodisMainEntry);
//# sourceMappingURL=AyodisEntryMember.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Removes the specified fields from the hash stored at key. Specified fields that do
* not exist within this hash are ignored. If key does not exist, it is treated as an
* empty hash and this command returns 0.
*
* @param key           Key
* @returns Integer     Number of key removed
*/
Ayodis['hdel'] = function (key) {
    // Reply
    var count = 0;

    // Reply
    var args = arguments, cb = this.__checkCallback(args[args.length - 1]), length = (_.isNull(cb)) ? args.length : (args.length - 1);

    for (var i = 1; i < length; i++) {
        if (!this.__checkField(args[i])) {
            return this.__sendCallback(this.__msg.ERR_ARGS + ' HDEL' + ' :: ' + key, null, cb);
        }
    }

    for (var i = 1; i < length; i++) {
        count += (this._key[key] && this._key[key].removeField(args[i])) ? 1 : 0;
    }

    console.log(count);

    return this.__sendCallback(null, count, cb);
};
//# sourceMappingURL=hdel.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns if field is an existing field in the hash stored at key.
*
* @param key       Key
* @param field     Field where value must be added
* @param cb        Optional Callback
*/
Ayodis['hexists'] = function (key, field, cb) {
    return this.__sendCallback(null, (this._key[key] && this._key[key].getField(field)) ? 1 : 0, cb);
};
//# sourceMappingURL=hexists.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the value associated with field in the hash stored at key.
*
* @param key       Key
* @param field     Field where value must be added
* @param cb        Optional Callback
*/
Ayodis['hget'] = function (key, field, cb) {
    return this.__sendCallback(null, (this._key[key] && this._key[key].getField(field)) ? this._key[key].getField(field) : null, cb);
};
//# sourceMappingURL=hget.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns all fields and values of the hash stored at key. In the returned value, every
* field name is followed by its value, so the length of the reply is twice the size of
* the hash.
*
* @param key       Key
* @param cb        Optional Callback
*/
Ayodis['hgetall'] = function (key, cb) {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].getAllFieldAndValue() : [], cb);
};
//# sourceMappingURL=hgetall.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Increments the number stored at field in the hash stored at key by increment. If
* key does not exist, a new key holding a hash is created. If field does not exist
* the value is set to 0 before the operation is performed.
*
* The range of values supported by HINCRBY is limited to 64 bit signed integers.
*
* @param key           Key
* @param field         Field where value must be added
* @param increment     Increment value
* @param cb            Optional Callback
* @returns Integer     The value at field after the increment operation
*/
Ayodis['hincrby'] = function (key, field, increment, cb) {
    if (!_.isNumber(increment) || !_.isInteger(increment)) {
        return this.__sendCallback('ERR value is not an integer or out of range :: Key : ' + key + ' :: Field : ' + field, null, cb);
    }

    // Add key if she doesn't exist
    this.__addKeyIfNotExist(AyodisEntryField, key);

    var fieldValue = this._key[key].getField(field), out;

    if (!_.isUndefined(fieldValue)) {
        if (!_.isNumber(fieldValue) || !_.isInteger(increment)) {
            return this.__sendCallback('ERR hash value is not an integer', null, cb);
        }

        out = this._key[key].setField(field, (fieldValue + increment));
    } else {
        out = this._key[key].setField(field, increment);
    }

    // Get back result
    return this.__sendCallback(null, out, cb);
};
//# sourceMappingURL=hincrby.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Increment the specified field of an hash stored at key, and representing a floating point
* number, by the specified increment. If the field does not exist, it is set to 0 before
* performing the operation. An error is returned if one of the following conditions occur:
*
* - The field contains a value of the wrong type (not a string).
* - The current field content or the specified increment are not parsable as a double precision floating point number.
*
* The exact behavior of this command is identical to the one of the INCRBYFLOAT
* command, please refer to the documentation of INCRBYFLOAT for further information.
*
* @param key           Key
* @param field         Field where value must be added
* @param increment     Increment value
* @param cb            Optional Callback
* @returns String      The value of field after the increment.
*/
Ayodis['hincrbyfloat'] = function (key, field, increment, cb) {
    if (!_.isNumber(increment)) {
        return this.__sendCallback('ERR value is not an integer or out of range :: Key : ' + key + ' :: Field : ' + field, null, cb);
    }

    // Check if value exist
    var out;

    // Add key if she doesn't exist
    this.__addKeyIfNotExist(AyodisEntryField, key);

    var fieldValue = this._key[key].getField(field);

    if (!_.isUndefined(fieldValue)) {
        if (!_.isNumber(fieldValue)) {
            return this.__sendCallback('ERR hash value is not an integer', null, cb);
        }

        out = this._key[key].setField(field, (fieldValue + increment));
    } else {
        out = this._key[key].setField(field, increment);
    }

    // Get back result
    return this.__sendCallback(null, out.toString(), cb);
};
//# sourceMappingURL=hincrbyfloat.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns all field names in the hash stored at key.
*
* @param key       Key
* @param cb        Optional Callback
*/
Ayodis['hkeys'] = function (key, cb) {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].getAllField() : [], cb);
};
//# sourceMappingURL=hkeys.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the number of fields contained in the hash stored at key.
*
* @param key       Key
* @param cb        Optional Callback
*/
Ayodis['hlen'] = function (key, cb) {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].countField() : 0, cb);
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
*
* @param key               Key
* @returns Array String    List of values associated with the given fields, in the same order as they are requested.
*/
Ayodis['hmget'] = function (key) {
    // Reply
    var args = arguments, out = [], cb = this.__checkCallback(args[args.length - 1]), length = (_.isNull(cb)) ? args.length : (args.length - 1);

    for (var i = 1, ls = length; i < ls; i++) {
        out.push((this._key[key]) ? this._key[key].getField(args[i]) : null);
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
        this.__addKeyIfNotExist(AyodisEntryField, key);

        // Push data
        if (!field) {
            this._key[key].setField(fieldName, args[i]);
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
Ayodis['hsetnx'] = function (key, field, value, cb) {
    if (!this.__checkValue(value)) {
        return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER + ' :: Key : ' + key + ' :: Field : ' + field, null, cb);
    }

    // Check if value exist
    var exist = (this._key[key] && this._key[key].getField(field)) ? 0 : 1;

    // Add key if she doesn't exist
    this.__addKeyIfNotExist(AyodisEntryField, key);

    // If is a new field, add value
    if (exist === 1) {
        this._key[key].setField(field, value);
    }

    // Get back result
    return this.__sendCallback(null, exist, cb);
};
//# sourceMappingURL=hsetnx.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns all values in the hash stored at key.
*
* @param key               Key
* @param cb                Optional Callback
* @returns Array           List of values in the hash, or an empty list when key does not exist.
*/
Ayodis['hvals'] = function (key, cb) {
    return (this._key[key]) ? this.__sendCallback(null, this._key[key].getAllFieldValue(), cb) : this.__sendCallback(null, [], cb);
};
//# sourceMappingURL=hvals.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Add the specified members to the set stored at key. Specified
* members that are already a member of this set are ignored. If
* key does not exist, a new set is created before adding the
* specified members.
*
* An error is returned when the value stored at key is not a set.
*
* Arguments :: key member [member ...]
*
* @param key           Key
* @returns Integer     Number of key removed
*/
Ayodis['sadd'] = function (key) {
    var args = arguments, cb = this.__checkCallback(args[args.length - 1]), count = 0, length = (_.isNull(cb)) ? args.length : (args.length - 1);

    if (length < 2) {
        return this.__sendCallback(this.__msg.ERR_ARGS + ' SADD', null, cb);
    }

    for (var i = 1; i < length; i++) {
        if (!this.__checkValue(args[i])) {
            return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER + ' SADD' + ' :: ' + key, null, cb);
        }
    }

    // Add key if she doesn't exist
    this.__addKeyIfNotExist(AyodisEntryMember, key);

    for (var i = 1; i < length; i++) {
        count += (this._key[key].addIfValueNotExist(args[i])) ? 1 : 0;
    }

    return this.__sendCallback(null, count, cb);
};
//# sourceMappingURL=sadd.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the set cardinality (number of elements) of the set stored at key.
*
* Arguments :: key
*
* @param key           Key
* @param cb            Optional callback
* @returns Integer     The cardinality (number of elements) of the set, or 0 if key does not exist.
*/
Ayodis['scard'] = function (key, cb) {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].getAllMembers().length : 0, cb);
};
//# sourceMappingURL=scard.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns all the members of the set value stored at key.
*
* Arguments :: key callback
*
* @param key           Key
* @param cb            Optional callback
* @returns Array       All elements of the set.
*/
Ayodis['smembers'] = function (key, cb) {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].getAllMembers() : [], cb);
};
//# sourceMappingURL=smembers.js.map

///<reference path='./../def/defLoader.d.ts'/>
/**
* Remove the specified members from the set stored at key. Specified
* members that are not a member of this set are ignored. If key
* does not exist, it is treated as an empty set and this command
* returns 0.
*
* An error is returned when the value stored at key is not a set.
*
* Arguments :: key member [member ...]
*
* @param key           Key
* @returns Integer     Number of key removed
*/
Ayodis['srem'] = function (key) {
    var args = arguments, cb = this.__checkCallback(args[args.length - 1]), count = 0, length = (_.isNull(cb)) ? args.length : (args.length - 1);

    if (length < 2) {
        return this.__sendCallback(this.__msg.ERR_ARGS + ' SREM', null, cb);
    }

    for (var i = 1; i < length; i++) {
        if (!this.__checkValue(args[i])) {
            return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER + ' SREM' + ' :: ' + key, null, cb);
        }
    }

    for (var i = 1; i < length; i++) {
        count += (this._key[key] instanceof AyodisEntryMember && this._key[key].removeValue(args[i])) ? 1 : 0;
    }

    return this.__sendCallback(null, count, cb);
};
//# sourceMappingURL=srem.js.map

/**
 * Overload all method (in list after) to check args
 */
Ayodis['__overLoadCheckArgs'] = function() {
    var checkArgs = [
    /**
     * HASHES
     */
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
            method: 'hincrby',
            limit : 3,
            old: Ayodis.hincrby
        },
        {
            method: 'hincrbyfloat',
            limit : 3,
            old: Ayodis.hincrbyfloat
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
        },
    /**
     * SETS
     */
        {
            method : 'sadd',
            limit : 2,
            old : Ayodis.sadd
        },
        {
            method : 'scard',
            limit : 1,
            old : Ayodis.scard
        },
        {
            method : 'smembers',
            limit : 1,
            old : Ayodis.smembers
        },
        {
            method : 'srem',
            limit : 2,
            old : Ayodis.srem
        }

    ];

    /**
     * For each entry, we add method to check args before current method.
     */
    _.each(checkArgs, function(obj) {
        Ayodis[obj.method] = function () {

            //console.log('Check Args (' + obj.limit + ') in method :: ' + obj.method.toUpperCase());

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
            method: 'hincrby',
            old: Ayodis.hincrby
        },
        {
            method: 'hincrbyfloat',
            old: Ayodis.hincrbyfloat
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

            //console.log('Check Field (' + obj.limit + ') in method :: ' + obj.method.toUpperCase());

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
Ayodis['__overLoadCheckKey'] = function() {
    var checkKey = [
        {
            keyType : Ayodis.__CONST.KEY.HASH,
            keyData : [
                {
                    method: 'hexists',
                    old: Ayodis.hexists
                },
                {
                    method: 'hget',
                    old: Ayodis.hget
                },
                {
                    method: 'hincrby',
                    old: Ayodis.hincrby
                },
                {
                    method: 'hincrbyfloat',
                    old: Ayodis.hincrbyfloat
                },
                {
                    method: 'hlen',
                    old: Ayodis.hlen
                },
                {
                    method: 'hmget',
                    old: Ayodis.hmget
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
            ]
        },
        {
            keyType: Ayodis.__CONST.KEY.SET,
            keyData: [
                {
                    method: 'sadd',
                    old: Ayodis.sadd
                },
                {
                    method: 'scard',
                    old: Ayodis.scard
                },
                {
                    method: 'smembers',
                    old: Ayodis.smembers
                },
                {
                    method: 'srem',
                    old: Ayodis.srem
                }
            ]
        }

    ];

    _.each(checkKey, function (cfg) {
        _.each(cfg.keyData, function (obj) {
            Ayodis[obj.method] = function () {

                //console.log('Check Hash (' + arguments[0] + ') in method :: ' + obj.method.toUpperCase());
                if (!this.__checkHash(arguments[0])) {
                    return this.__sendCallback(this.__msg.KEY_MUST_BE_STRING + ' ' + obj.method.toUpperCase(), null, arguments[arguments.length - 1]);
                }

                var keyCheck = this.__checkKey(arguments[0], cfg.keyType);

                if (keyCheck !== 'OK') {
                    return this.__sendCallback(keyCheck + ' in method ' + obj.method.toUpperCase(), null, arguments[arguments.length - 1]);
                }

                return obj.old.apply(this, arguments);
            };
        });
    });

    return this;
};

/**
 * Start generation of checking. That's check Args, Field and Key before configuration method.
 */
Ayodis
    .__overLoadCheckHashField()
    .__overLoadCheckKey()
    .__overLoadCheckArgs();