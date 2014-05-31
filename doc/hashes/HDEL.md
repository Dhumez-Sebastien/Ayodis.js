### HDEL key field [field ...]

Removes the specified fields from the hash stored at key. Specified fields
that do not exist within this hash are ignored. If key does not exist, it
is treated as an empty hash and this command returns 0.

#### Return value
**Integer reply**: the number of fields that were removed from the hash, not including specified but non existing fields.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myHash', 'field1', 'Hello'); // => (integer) 1

    Ayodis.hdel('myHash', 'field1'); // => (integer) 1
    
    Ayodis.hdel('myHash', 'field1'); // => (integer) 0
    
    
    // Async
    Ayodis.hset('myHash', 'field1', 'Hello'); // => (integer) 1
    
    Ayodis.hdel('myHash', 'field1', function(err, res) {
        // err :: null
        // res => (integer) 1
    });
    
    Ayodis.hdel('myHash', 'field1', function(err, res) {
        // err :: null
        // res => (integer) 0
    });
```