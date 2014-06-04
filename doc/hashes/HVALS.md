### HVALS key

Returns all values in the hash stored at *key*.

#### Return value

**Array reply**: list of values in the hash, or an empty list when key does not exist.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myhash', 'field1', 'Ayolan'); // => (integer) 1
    Ayodis.hset('myhash', 'field2', 'MMORPG'); // => (integer) 1
    Ayodis.hvals('myhash'); // => 1) "Ayolan", 2) "MMORPG"

    // Async
    Ayodis.hvals('myhash', function(err, res) {
        // err => null
        // res => 1) "Ayolan", 2) "MMORPG"
    });
```