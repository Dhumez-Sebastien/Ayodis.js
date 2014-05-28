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
