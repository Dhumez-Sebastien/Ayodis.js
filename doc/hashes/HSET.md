### HSET key field value

Sets field in the hash stored at key to value. If key does not exist, a
new key holding a hash is created. If field already exists in the hash,
it is overwritten.

#### Return value

**Integer reply**, specifically:

- 1 if *field* is a new field in the hash and value was set.
- 0 if *field* already exists in the hash and the value was updated.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myhash', 'field1', 'Ayolan'); // => (integer) 1
    Ayodis.hget('myhash', 'field1'); // => "Ayolan"
    Ayodis.hset('myhash', 'field1', 'MMORPG'); // => (integer) 0
    Ayodis.hget('myhash', 'field1'); // => "MMORPG"

    // Async
    Ayodis.hset('myhash', 'field2', 'AyolanNew', function(err, res) {
        // err => null
        // res => (integer) 1
        Ayodis.hget('myhash', 'field2'); // => "AyolanNew"
    });
    Ayodis.hget('myhashunknown', 'field3', 'New MMORPG', function(err, res) {
        // err => null
        // res => (integer) 1
        Ayodis.hget('myhashunknown', 'field3'); // => "New MMORPG"
    });
```