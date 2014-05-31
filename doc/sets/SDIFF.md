### SDIFF key [key ...]

Returns the members of the set resulting from the difference
between the first set and all the successive sets.

Keys that do not exist are considered to be empty sets.

#### Return value
**Array reply**: list with members of the resulting set.


#### Examples
```javascript
    // Sync
    Ayodis.sadd('key1', 'a', 'b', 'c'); // => (integer) 3
    Ayodis.sadd('key2', 'c', 'd', 'e'); // => (integer) 3
    Ayodis.sdiff('key1', 'key2'); // => 1) "a", 2) "b"
    Ayodis.sdiff('key2', 'key1'); // => 1) "d", 2) "e"
    Ayodis.sdiff('key3', 'key1'); // => null

    // Async
    Ayodis.sdiff('key1', 'key2', function(err, res) {
        // err => null
        // res => (integer) 1) "a", 2) "b"
    });
    Ayodis.sdiff('key2', 'key1', function(err, res) {
        // err => null
        // res => (integer) 1) "d", 2) "e"
    });
    Ayodis.sdiff('key3', 'key1', function(err, res) {
        // err => empty list or set
        // res => null
    });
```