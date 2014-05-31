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

            var limit = 0 + obj.limit;

            // If the last arguments is optional callback, increment counter
            if (_.isFunction(arguments[arguments.length -1])) {
                limit++;
            }

            for (var i = 0; i < limit; i++) {
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