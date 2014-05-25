"use strict";

class Ayodis {

    /**
     * List of Hash
     */
    private static _hash : any = {};

    /**
     * List of Key
     */
    private static _key : any = {};

    /**
     * If key already exists and is a string, this command appends the value at the end of the
     * string. If key does not exist it is created and set as an empty string, so APPEND will
     * be similar to SET in this special case.
     */
    public static exists(key : string) : number {
        if (this._key[key]) {

        } else {
            return 0;
        }
    }

    /**
     * Removes the specified fields from the hash stored at key. Specified fields that do
     * not exist within this hash are ignored. If key does not exist, it is treated as an
     * empty hash and this command returns 0.
     *
     * @param hash      Hash to Store field
     * @param field     Field where value must be added
     */
    public static hdel(hash : string, field : string) : number {
        // Reply
        var exist : number = 0;

        // Check if hash/field exist and remove
        if ((this._hash[hash] && this._hash[hash][field])) {
            exist = 1;

            delete (this._hash[hash][field]);
        }

        return exist;
    }

    /**
     * Returns if field is an existing field in the hash stored at key.
     *
     * @param hash      Hash to Store field
     * @param field     Field where value must be added
     */
    public static hexists(hash : string, field : string) : number {
        return (this._hash[hash] && this._hash[hash][field]) ? 1 : 0;
    }

    /**
     * Returns the value associated with field in the hash stored at key.
     *
     * @param hash      Hash to Store field
     * @param field     Field where value must be added
     * @param cb        Callback
     */
    public static hget(hash : string, field : string, cb : (err : any, res : any) => void) : void {
        cb(0, (this._hash[hash] && this._hash[hash][field]) ? this._hash[hash][field] : null);
    }

    /**
     * Returns all fields and values of the hash stored at key. In the returned value, every
     * field name is followed by its value, so the length of the reply is twice the size of
     * the hash.
     *
     * @param hash      Hash must be get
     */
    public static hgetall(hash : string) : any {
        // Reply
        var out : any[] = [];

        // Add key & value into array
        for (var key in this._hash[hash]) {
            out.push(key);
            out.push(this._hash[hash][key]);
        }

        return out;
    }

    /**
     * Returns all field names in the hash stored at key.
     *
     * @param hash      Hash must be get
     */
    public static hkeys(hash : string) : any {
        // Reply
        var out : any[] = [];

        // Add key & value into array
        for (var key in this._hash[hash]) {
            out.push(key);
        }

        return out;
    }

    /**
     * Returns the number of fields contained in the hash stored at key.
     *
     * @param hash      Hash must be get
     */
    public static hlen(hash : string) : number {
        // Reply
        var length : number = 0;

        // Count fields
        for (var key in this._hash[hash]) {
            if (this._hash[hash].hasOwnProperty(key)) {
                length++;
            }
        }

        return length;
    }

    /**
     * Returns the values associated with the specified fields in the hash stored at key.
     * For every field that does not exist in the hash, a nil value is returned. Because
     * a non-existing keys are treated as empty hashes, running HMGET against a non-existing
     * key will return a list of null values.
     *
     * @param hash      Hash must be get
     */
    public static hmget(hash : string) : string[] {
        // Reply
        var args : any = arguments,
            out : string[] = [];

        // Read all args (the first arguments is the hash)
        for (var i = 1, ls = args.length; i < ls; i++) {
            out.push((this._hash[hash] && this._hash[hash][args[i]]) ? this._hash[hash][args[i]] : null);
        }

        return out;
    }

    /**
     /**
     * Sets field in the hash stored at key to value. If key does not exist, a new
     * key holding a hash is created. If field already exists in the hash, it is overwritten.
     *
     * @param hash      Hash to Store field
     * @param field     Field where value must be added
     * @param value     Value must be stored
     */
    public static hset(hash : string, field : string, value : any) : number {
        // Check if value exist
        var exist : number = (this._hash[hash] && this._hash[hash][field]) ? 0 : 1;

        // Build hash
        if (!this._hash[hash]) {
            this._hash[hash] = {};
        }

        // Erase value
        this._hash[hash][field] = value;

        // Get back result
        return exist;
    }

}