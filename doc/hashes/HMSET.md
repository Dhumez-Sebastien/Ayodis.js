### HMSET key field value [field value ...]

Sets the specified fields to their respective values in the hash
stored at *key*. This command overwrites any existing fields in
the hash. If key does not exist, a new key holding a hash is created.

#### Return value

**Simple string reply**


#### Examples
```javascript
    // Sync
    Ayodis.hmset('myhash', 'field1', 'Ayolan', 'field2', 'MMORPG'); // => "OK"
    Ayodis.hget('myhash', 'field1'); // => "Ayolan"
    Ayodis.hget('myhash', 'field2'); // => "MMORPG"

    // Async
    Ayodis.hmset('myhash', 'field3', 'AyolanNew', 'field4', 'MMORPGNew', function(err, res) {
        // err => null
        // res => "OK"
        Ayodis.hget('myhash', 'field3'); // => "AyolanNew"
        Ayodis.hget('myhash', 'field4'); // => "MMORPGNew"
    });
    Ayodis.hmget('myhashunknown', 'field3', 'AyolanNew', 'field4', 'MMORPGNew', function(err, res) {
        // err => null
        // res => "OK"
        Ayodis.hget('myhash', 'field3'); // => "AyolanNew"
        Ayodis.hget('myhash', 'field4'); // => "MMORPGNew"
    });
```