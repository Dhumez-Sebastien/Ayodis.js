### HGETALL key

Returns all fields and values of the hash stored at key. In the returned
value, every field name is followed by its value, so the length of the
reply is twice the size of the hash.

#### Return value
**Array reply**: list of fields and their values stored in the hash, or an empty list when *key* does not exist.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myhash', 'field1', "Hello"); // => (integer) 1
    Ayodis.hset('myhash', 'field2', "World"); // => (integer) 1
    Ayodis.hgetall('myhash'); // => 1) "field1", 2) "Hello", 3) "field2", 4) "World"

    // Async
    Ayodis.hgetall('myhash', function(err, res) {
        // err => null
        // res => 1) "field1", 2) "Hello", 3) "field2", 4) "World"
    });
```