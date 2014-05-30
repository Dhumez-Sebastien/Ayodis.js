///<reference path='./../def/defLoader.d.ts'/>

/**
 * Removes the specified fields from the hash stored at key. Specified fields that do
 * not exist within this hash are ignored. If key does not exist, it is treated as an
 * empty hash and this command returns 0.
 *
 * @param key           Key
 * @returns Integer     Number of key removed
 */
Ayodis['hdel'] = function(key : string) : number {
    // Reply
    var count : number = 0 ;

    // Reply
    var args : IArguments = arguments,
        cb : (err : any, res : string) => void = this.__checkCallback(args[args.length -1]),
        length : number = (_.isNull(cb)) ? args.length : (args.length -1);

    // Check if all field are secure
    for (var i : number = 1; i < length; i++) {
        if (!this.__checkField(args[i])) {
            return this.__sendCallback(this.__msg.ERR_ARGS+' HDEL'+' :: '+key, null, cb);
        }
    }

    // Remove and count elem
    for (var i : number = 1; i < length; i++) {
        count += (this._key[key] && this._key[key].removeField(args[i])) ? 1 : 0;
    }

    console.log(count);

    return this.__sendCallback(null, count, cb);
};