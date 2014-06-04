### HKEYS key

Returns all field names in the hash stored at *key*.

#### Return value

** Array reply**: list of fields in the hash, or an empty list when key does not exist.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myhash', 'field1', 'Ayolan'); // => (integer) 1
    Ayodis.hset('myhash', 'field2', 'MMORPG'); // => (integer) 1
    Ayodis.hkeys('myhash'); // => 1) "field1", 2) "field2"

    // Async
    Ayodis.hkeys('myhash', function(err, res) {
        // err => null
        // res => 1) "field1", 2) "field2"
    });
    Ayodis.hkeys('myhashunknown', function(err, res) {
        // err => null
        // res => []
    });
```