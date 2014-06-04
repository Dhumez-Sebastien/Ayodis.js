### HSETNX key field value

Sets *field* in the hash stored at *key* to *value*, only if field
does not yet exist. If key does not exist, a new key holding
a hash is created. If field already exists, this operation
has no effect.

#### Return value

**Integer reply**, specifically:

- 1 if *field* is a new field in the hash and value was set.
- 0 if *field* already exists in the hash and no operation was performed.


#### Examples
```javascript
    // Sync
    Ayodis.hsetnx('myhash', 'field1', 'Ayolan'); // => (integer) 1
    Ayodis.hget('myhash', 'field1'); // => "Ayolan"
    Ayodis.hsetnx('myhash', 'field1', 'MMORPG'); // => (integer) 0
    Ayodis.hget('myhash', 'field1'); // => "Ayolan"

    // Async
    Ayodis.hsetnx('myhash', 'field2', 'AyolanNew', function(err, res) {
        // err => null
        // res => (integer) 1
        Ayodis.hget('myhash', 'field2'); // => "AyolanNew"
        
        Ayodis.hsetnx('myhash', 'field2', 'MMORPG', function(err, res) {
                // err => null
                // res => (integer) 0
                Ayodis.hget('myhash', 'field2'); // => "AyolanNew"
        });
    });
```