///<reference path='./../def/defLoader.d.ts'/>

/**
 * Returns all the members of the set value stored at key.
 *
 * Arguments :: key callback
 *
 * @param key           Key
 * @param cb            Optional callback
 * @returns Array       All elements of the set.
 */
Ayodis['smembers'] = function(key : string, cb ?: (err : any, res : number) => void) : any[] {
    return this.__sendCallback(null, (this._key[key]) ? this._key[key].getAllMembers() : [], cb);
};