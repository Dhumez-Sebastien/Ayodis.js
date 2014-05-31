///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the members of the set resulting from the difference between the first set and all the successive sets.
*
* Keys that do not exist are considered to be empty sets.
*
* Arguments :: key [key ...]
*
* @param key           Key
* @returns Integer     Number of key removed
*/
Ayodis['sdiff'] = function (key) {
    var args = arguments, cb = this.__checkCallback(args[args.length - 1]), length = (_.isNull(cb)) ? args.length : (args.length - 1);

    // If key no exists, get an error
    if (_.isUndefined(this._key[key])) {
        return this.__sendCallback(this.__msg.EMPTY_SET_OR_LIST + ' :: SDIFF' + ' :: ' + key, null, cb);
    }

    for (var i = 0; i < length; i++) {
        if (!this.__checkHash(args[i])) {
            return this.__sendCallback(this.__msg.KEY_MUST_BE_STRING + ' SDIFF' + ' :: ' + key, null, cb);
        }
    }

    // Push all elements in array
    var allElem = [];

    for (var i = 1; i < length; i++) {
        var temp = (this._key[args[i]] && this._key[args[i]] instanceof AyodisEntryMember) ? this._key[args[i]].getAllMembers() : [];
        for (var j = 0, lx = temp.length; j < lx; j++) {
            allElem.push(temp[j]);
        }
    }

    return this.__sendCallback(null, _.difference((this._key[key] && this._key[key] instanceof AyodisEntryMember) ? this._key[key].getAllMembers() : [], _.uniq(allElem)), cb);
};
//# sourceMappingURL=sdiff.js.map
