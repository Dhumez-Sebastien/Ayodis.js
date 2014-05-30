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

            //console.log('Check Hash (' + arguments[0] + ') in method :: ' + obj.method.toUpperCase());

            if (!this.__checkHash(arguments[0])) {
                return this.__sendCallback(this.__msg.HASH_MUST_BE_STRING + ' ' + obj.method.toUpperCase(), null, arguments[arguments.length - 1]);
            }

            return obj.old.apply(this, arguments);
        };
    });

    return this;
};

Ayodis.__overLoadCheckHashField().__overLoadCheckHash().__overLoadCheckArgs();