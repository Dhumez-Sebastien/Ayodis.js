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
