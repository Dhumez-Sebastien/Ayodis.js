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
Ayodis['srem'] = function(key : string) : number {
    var args : IArguments = arguments,
        cb : (err : any, res : string) => void = this.__checkCallback(args[args.length -1]),
        count : number = 0,
        length : number = (_.isNull(cb)) ? args.length : (args.length -1);

    if (length < 2) {
        return this.__sendCallback(this.__msg.ERR_ARGS + ' SREM', null, cb);
    }

    // Check if all field are secure
    for (var i : number = 1; i < length; i++) {
        if (!this.__checkValue(args[i])) {
            return this.__sendCallback(this.__msg.VALUE_MUST_BE_STRING_OR_NUMBER+' SREM'+' :: '+key, null, cb);
        }
    }

    // Remove and count elem
    for (var i : number = 1; i < length; i++) {
        count += (this._key[key] instanceof AyodisEntryMember && this._key[key].removeValue(args[i])) ? 1 : 0;
    }

    return this.__sendCallback(null, count, cb);
};