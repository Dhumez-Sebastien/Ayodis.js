///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns all field names in the hash stored at key.
*
* @param key       Key
* @param cb        Optional Callback
*/
Ayodis['hkeys'] = function (key, cb) {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].getAllField() : [], cb);
};
//# sourceMappingURL=hkeys.js.map
