///<reference path='./../def/defLoader.d.ts'/>

/**
 * Returns the members of the set resulting from the difference between the first set and all the successive sets.
 *
 * Keys that do not exist are considered to be empty sets.
 *
 * Arguments :: key [key ...]
 *
 * @param key           Key
 * @returns Array       List with members of the resulting set.
 */
Ayodis['sdiff'] = function(key : string) : any[] {
    var args : IArguments = arguments,
        cb : (err : any, res : string) => void = this.__checkCallback(args[args.length -1]),
        length : number = (_.isNull(cb)) ? args.length : (args.length -1);

    // If key no exists, get an error
    if (_.isUndefined(this._key[key])) {
        return this.__sendCallback(this.__msg.EMPTY_SET_OR_LIST+' :: SDIFF'+' :: '+key, null, cb);
    }

    // Push all elements in array
    var allElem : any[] = [];

    // Remove and count elem
    for (var i : number = 1; i < length; i++) {
        var temp : any[] = (this._key[args[i]] && this._key[args[i]] instanceof AyodisEntryMember) ? this._key[args[i]].getAllMembers() : [];
        for (var j : number = 0, lx : number = temp.length; j < lx; j++) {
            allElem.push(temp[j]);
        }
    }

    return this.__sendCallback(null, _.difference((this._key[key] && this._key[key] instanceof AyodisEntryMember) ? this._key[key].getAllMembers() : [], _.uniq(allElem)), cb);
};