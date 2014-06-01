### SDIFFSTORE destination key [key ...]

This command is equal to [SDIFF](SDIFF.md), but instead of returning the resulting set, it is stored in destination.

If destination already exists, it is overwritten.

#### Return value
**Array reply**: the number of elements in the resulting set.


#### Examples
```javascript
    // Sync
    Ayodis.sadd('key1', 'a', 'b', 'c'); // => (integer) 3
    Ayodis.sadd('key2', 'c', 'd', 'e'); // => (integer) 3
    Ayodis.sdiffstore('key', 'key1', 'key2'); // => 2
    Ayodis.smembers('key'); // => 1) "a", 2) "b"

    // Async
    Ayodis.sdiffstore('key', 'key1', 'key2', function(err, res) {
        // err => null
        // res => (integer) 2
        
         Ayodis.smembers('key'); // => 1) "a", 2) "b"
    });
```