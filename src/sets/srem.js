///<reference path='./../def/defLoader.d.ts'/>
/**
* Remove the specified members from the set stored at key. Specified
* members that are not a member of this set are ignored. If key
* does not exist, it is treated as an empty set and this command
* returns 0.
*
* An error is returned when the value stored at key is not a set.
*
* Arguments :: key member [member ...]
*
* @param key           Key
* @returns Integer     Number of key removed
*/
Ayodis['srem'] = function (key) {
    var args = arguments, cb = this.__checkCallback(args[args.length - 1]), count = 0, length = (_.isNull(cb)) ? args.length : (args.length - 1);

    for (var i = 1; i < length; i++) {
        if (!this.__checkValue(args[i])) {
            return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER + ' SREM' + ' :: ' + key, null, cb);
        }
    }

    for (var i = 1; i < length; i++) {
        count += (this._key[key] instanceof AyodisEntryMember && this._key[key].removeValue(args[i])) ? 1 : 0;
    }

    return this.__sendCallback(null, count, cb);
};
//# sourceMappingURL=srem.js.map
