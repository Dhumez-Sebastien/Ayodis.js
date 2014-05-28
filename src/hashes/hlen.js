///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the number of fields contained in the hash stored at key.
*
* @param hash      Hash must be get
* @param cb        Optional Callback
*/
Ayodis['hlen'] = function (hash, cb) {
    if (!this.__checkHash(hash)) {
        return this.__sendCallback(this.__msg.HASH_MUST_BE_STRING + ' :: ' + hash, null, cb);
    }

    // Reply
    var length = 0;

    for (var key in this._hash[hash]) {
        if (this._hash[hash].hasOwnProperty(key)) {
            length++;
        }
    }

    return this.__sendCallback(null, length, cb);
};
//# sourceMappingURL=hlen.js.map
