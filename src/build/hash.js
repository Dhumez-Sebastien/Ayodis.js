/**
 * Overload all method (in list after) to check args
 */
Ayodis['__overLoadCheckArgs'] = function() {
    var checkArgs = [
        {
            check : ['args', 'hash'],
            method : 'hexists',
            limit : 2,
            old : Ayodis.hexists
        },
        {
            check : ['args'],
            method : 'hget',
            limit : 2,
            old : Ayodis.hget
        },
        {
            check : ['args'],
            method : 'hlen',
            limit : 1,
            old : Ayodis.hlen
        },
        {
            check : ['args'],
            method : 'hmget',
            limit : 1,
            old : Ayodis.hmget
        },
        {
            check : ['args'],
            method : 'hmset',
            limit : 1,
            old : Ayodis.hmset
        },
        {
            check : ['args'],
            method : 'hset',
            limit : 3,
            old : Ayodis.hset
        },
        {
            check : ['args'],
            method : 'hsetnx',
            limit : 3,
            old : Ayodis.hsetnx
        }
    ];

    /**
     * For each entry, we add method to check args before current method.
     */
    _.each(checkArgs, function(obj) {

        for (var i = 0; i < obj.check.length; i++) {

            Ayodis[obj.method] = function () {

                console.log('Check Args (' + obj.limit + ') in method :: ' + obj.method.toUpperCase());

                for (var i = 0; i < obj.limit; i++) {
                    if (!this.__checkArgs(arguments[i])) {
                        return this.__sendCallback(this.__msg.ERR_ARGS + ' ' + obj.method.toUpperCase(), null, arguments[arguments.length - 1]);
                    }
                }

                return obj.old.apply(this, arguments);
            };
        }
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
        }
    ];

    _.each(checkHash, function (obj) {
        Ayodis[obj.method] = function () {

            console.log('Check Hash (' + obj.limit + ') in method :: ' + obj.method.toUpperCase());

            if (!this.__checkHash(arguments[0])) {
                return this.__sendCallback(this.__msg.HASH_MUST_BE_STRING + ' ' + obj.method.toUpperCase(), null, arguments[arguments.length - 1]);
            }

            return obj.old.apply(this, arguments);
        };
    });

    return this;
};

Ayodis.__overLoadCheckHashField().__overLoadCheckHash().__overLoadCheckArgs();