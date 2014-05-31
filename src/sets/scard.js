///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the set cardinality (number of elements) of the set stored at key.
*
* Arguments :: key
*
* @param key           Key
* @param cb            Optional callback
* @returns Integer     The cardinality (number of elements) of the set, or 0 if key does not exist.
*/
Ayodis['scard'] = function (key, cb) {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].getAllMembers().length : 0, cb);
};
//# sourceMappingURL=scard.js.map
