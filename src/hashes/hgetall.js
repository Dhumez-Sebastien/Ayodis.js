///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns all fields and values of the hash stored at key. In the returned value, every
* field name is followed by its value, so the length of the reply is twice the size of
* the hash.
*
* @param key       Key
* @param cb        Optional Callback
*/
Ayodis['hgetall'] = function (key, cb) {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].getAllFieldAndValue() : [], cb);
};
//# sourceMappingURL=hgetall.js.map
