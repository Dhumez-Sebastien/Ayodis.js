///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the value associated with field in the hash stored at key.
*
* @param key       Key
* @param field     Field where value must be added
* @param cb        Optional Callback
*/
Ayodis['hget'] = function (key, field, cb) {
    return this.__sendCallback(null, (this._key[key] && this._key[key].getField(field)) ? this._key[key].getField(field) : null, cb);
};
//# sourceMappingURL=hget.js.map
