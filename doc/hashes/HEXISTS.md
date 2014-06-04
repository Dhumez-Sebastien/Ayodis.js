### HEXISTS key field

Returns if field is an existing field in the hash stored at key.

#### Return value
**Array reply**: specifically:

- 1 if the hash contains *field*.
- 0 if the hash does not contain *field*, or *key* does not exist.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myhash', 'field1', "foo"); // => (integer) 1
    Ayodis.hexists('myhash', 'field1'); // => (integer) 1
    Ayodis.hexists('myhash', 'field2'); // => (integer) 0

    // Async
    Ayodis.hexists('myhash', 'field1', function(err, res) {
        // err => null
        // res => (integer) 1
    });
    Ayodis.hexists('myhash', 'field2', function(err, res) {
        // err => null
        // res => (integer) 0
    });
```