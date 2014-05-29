///<reference path='./../def/defLoader.d.ts'/>

/**
 * Returns the number of fields contained in the hash stored at key.
 *
 * @param hash      Hash must be get
 * @param cb        Optional Callback
 */
Ayodis['hlen'] = function(hash : string, cb ?: (err : any, res : number) => void) : number {
    // Reply
    var length : number = 0;

    // Count fields
    for (var key in this._hash[hash]) {
        if (this._hash[hash].hasOwnProperty(key)) {
            length++;
        }
    }

    return this.__sendCallback(null, length, cb);
};