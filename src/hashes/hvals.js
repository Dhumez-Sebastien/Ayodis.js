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
