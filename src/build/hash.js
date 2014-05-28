/**
 * This array contain the list of method must be checked with the limit of args and
 * the old method must be erase.
 */
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
    }
];

/**
 * For each entry, we add method to check args before current method.
 */
_.each(checkArgs, function(obj) {
    Ayodis[obj.method] = function() {

        console.log('Check Args ('+obj.limit+') in method :: '+obj.method.toUpperCase());

        for (var i = 0; i < obj.limit; i++) {
            if (!this.__checkArgs(arguments[i])) {
                return this.__sendCallback(this.__msg.ERR_ARGS+' '+obj.method.toUpperCase(), null, arguments[arguments.length -1]);
            }
        }

        return obj.old.apply(this, arguments);
    };
});

