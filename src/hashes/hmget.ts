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
Ayodis['hmget'] = function() : string[] {
    // Reply
    var args : IArguments = arguments,
        hash : string = args[0] || null,
        out : string[] = [],
        cb : (err : any, res : string[]) => void,
        length : number = args.length;

    // Check if last entry is a Callback
    if (args[args.length -1] && _.isFunction(args[args.length -1])) {
        cb = args[args.length -1];
        length--;
    }

    // Read all args (the first arguments is the hash)
    for (var i : number = 1, ls : number = length; i < ls; i++) {
        out.push((this._hash[hash] && this._hash[hash][args[i]]) ? this._hash[hash][args[i]] : null);
    }

    return this.__sendCallback(null, out, cb);
};