///<reference path='./../def/defLoader.d.ts'/>
/**
* Returns the members of the set resulting from the intersection of all the given sets.
*
* Keys that do not exist are considered to be empty sets. With one of the keys being
* an empty set, the resulting set is also empty (since set intersection with an empty
* set always results in an empty set).
*
* Arguments :: key [key ...]
*
* @param key           Key
* @returns Array       List with members of the resulting set.
*/
Ayodis['sinter'] = function (key) {
    var args = arguments, cb = this.__checkCallback(args[args.length - 1]), length = (_.isNull(cb)) ? args.length : (args.length - 1);

    // If key no exists, get an error
    if (_.isUndefined(this._key[key])) {
        return this.__sendCallback(this.__msg.EMPTY_SET_OR_LIST + ' :: SINTER' + ' :: ' + key, null, cb);
    }

    // Push all elements in array
    var allElem = [], out = (this._key[key] && this._key[key] instanceof AyodisEntryMember) ? this._key[key].getAllMembers() : [];

    if (out.length > 0) {
        for (var i = 1; i < length; i++) {
            out = _.intersection(out, (this._key[args[i]] && this._key[args[i]] instanceof AyodisEntryMember) ? this._key[args[i]].getAllMembers() : []);
        }
    }

    return this.__sendCallback(null, _.uniq(out), cb);
};
//# sourceMappingURL=sinter.js.map
