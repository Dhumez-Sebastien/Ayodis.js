### HINCRBY key field increment

Increments the number stored at *field* in the hash stored at key by
*increment*. If key does not exist, a new key holding a hash is created.
If *field* does not exist the value is set to *0* before the operation is
performed.

The range of values supported by **HINCRBY** is limited to 64 bit signed integers.

#### Return value
**Integer reply**: the value at *field* after the increment operation.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myhash', 'field1', 5); // => (integer) 1
    Ayodis.hincrby('myhash', 'field1', 1); // => (integer) 6
    Ayodis.hincrby('myhash', 'field1', -1); // => (integer) 5
    Ayodis.hincrby('myhash', 'field1', 10); // => (integer) 15

    // Async
    Ayodis.hincrby('myhash', 'field1', 10 , function(err, res) {
        // err => null
        // res => (integer) 25
    });
    Ayodis.hincrby('myhash', 'field1', -50 , function(err, res) {
        // err => null
        // res => (integer) -25
    });
```