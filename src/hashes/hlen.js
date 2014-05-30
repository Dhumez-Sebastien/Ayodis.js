///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the number of fields contained in the hash stored at key.
*
* @param key       Key
* @param cb        Optional Callback
*/
Ayodis['hlen'] = function (key, cb) {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].countField() : 0, cb);
};
//# sourceMappingURL=hlen.js.map
