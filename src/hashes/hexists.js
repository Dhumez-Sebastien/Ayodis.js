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
