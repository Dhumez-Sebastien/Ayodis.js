///<reference path='./../def/defLoader.d.ts'/>
/**
* This command is equal to SDIFF, but instead of returning the resulting set, it is stored in destination.
*
* If destination already exists, it is overwritten.
*
* Arguments :: destination key [key ...]
*
* @param destination   Key Destination
* @param keyBase       Key Base to compare
* @returns Integer     The number of elements in the resulting set.
*/
Ayodis['sdiffstore'] = function (destination, keyBase) {
    var args = arguments, cb = this.__checkCallback(args[args.length - 1]), length = (_.isNull(cb)) ? args.length : (args.length - 1);

    // Push all elements in array
    var allElem = [];

    for (var i = 2; i < length; i++) {
        var temp = (this._key[args[i]] && this._key[args[i]] instanceof AyodisEntryMember) ? this._key[args[i]].getAllMembers() : [];
        for (var j = 0, lx = temp.length; j < lx; j++) {
            allElem.push(temp[j]);
        }
    }

    // Array difference
    var entryDiff = _.difference((this._key[keyBase] && this._key[keyBase] instanceof AyodisEntryMember) ? this._key[keyBase].getAllMembers() : [], _.uniq(allElem)), count = 0;

    if (entryDiff.length > 0) {
        // Add key if she doesn't exist
        this.__addKeyIfNotExist(AyodisEntryMember, destination);

        for (var i = 0, ls = entryDiff.length; i < ls; i++) {
            this._key[destination].addIfValueNotExist(entryDiff[i]);
            count++;
        }
    }

    return this.__sendCallback(null, count, cb);
};
//# sourceMappingURL=sdiffstore.js.map
