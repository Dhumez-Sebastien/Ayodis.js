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
