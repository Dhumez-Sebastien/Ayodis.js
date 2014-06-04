### HLEN key

Returns the number of fields contained in the hash stored at *key*.

#### Return value

**Integer reply**: number of fields in the hash, or 0 when key does not exist.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myhash', 'field1', 'Ayolan'); // => (integer) 1
    Ayodis.hset('myhash', 'field2', 'MMORPG'); // => (integer) 1
    Ayodis.hlen('myhash'); // (integer) 2

    // Async
    Ayodis.hlen('myhash', function(err, res) {
        // err => null
        // res => (integer) 2
    });
    Ayodis.hlen('myhashunknown', function(err, res) {
        // err => null
        // res => (integer) 0
    });
```