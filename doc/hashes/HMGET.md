### HMGET key field [field ...]

Returns the values associated with the specified *fields* in the
hash stored at key.

For every *field* that does not exist in the hash, a *null*
value is returned. Because a non-existing keys are treated as
empty hashes, running **HMGET** against a non-existing key will
return a list of nil values.

#### Return value

**Array reply**: list of values associated with the given fields, in the same order as they are requested.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myhash', 'field1', 'Ayolan'); // => (integer) 1
    Ayodis.hset('myhash', 'field2', 'MMORPG'); // => (integer) 1
    Ayodis.hmget('myhash', 'field1' field'2', 'nofield'); // => 1) "Ayolan", 2) "MMORPG", 3) (null)

    // Async
    Ayodis.hmget('myhash', 'field1' field'2', 'nofield', function(err, res) {
        // err => null
        // res => 1) "Ayolan", 2) "MMORPG", 3) (null)
    });
    Ayodis.hmget('myhashunknown', 'field1' field'2', 'nofield', function(err, res) {
        // err => null
        // res => 1) (null), 2) (null), 3) (null)
    });
```