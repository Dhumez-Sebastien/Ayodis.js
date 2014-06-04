### HGET key field

Returns the value associated with *field* in the hash stored at *key*.

#### Return value
**String reply**: the value associated with *field*, or *null* when *field* is not present in the hash or *key* does not exist.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myhash', 'field1', "foo"); // => (integer) 1
    Ayodis.hget('myhash', 'field1'); // => "foo"
    Ayodis.hget('myhash', 'field2'); // => null

    // Async
    Ayodis.hget('myhash', 'field1', function(err, res) {
        // err => null
        // res => "foo"
    });
    Ayodis.hget('myhash', 'field2', function(err, res) {
        // err => null
        // res => null
    });
```