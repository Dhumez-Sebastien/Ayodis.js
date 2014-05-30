///<reference path='./../def/defLoader.d.ts'/>
/**
* Removes the specified fields from the hash stored at key. Specified fields that do
* not exist within this hash are ignored. If key does not exist, it is treated as an
* empty hash and this command returns 0.
*
* @param key           Key
* @returns Integer     Number of key removed
*/
Ayodis['hdel'] = function (key) {
    // Reply
    var count = 0;

    // Reply
    var args = arguments, cb = this.__checkCallback(args[args.length - 1]), length = (_.isNull(cb)) ? args.length : (args.length - 1);

    for (var i = 1; i < length; i++) {
        if (!this.__checkField(args[i])) {
            return this.__sendCallback(this.__msg.ERR_ARGS + ' HDEL' + ' :: ' + key, null, cb);
        }
    }

    for (var i = 1; i < length; i++) {
        count += (this._key[key] && this._key[key].removeField(args[i])) ? 1 : 0;
    }

    console.log(count);

    return this.__sendCallback(null, count, cb);
};
//# sourceMappingURL=hdel.js.map
