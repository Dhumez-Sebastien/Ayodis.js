### SINTER key [key ...]

Returns the members of the set resulting from the intersection of all the given sets.

Keys that do not exist are considered to be empty sets. With one of the keys being
an empty set, the resulting set is also empty (since set intersection with an empty
set always results in an empty set).

#### Return value
**Array reply**: list with members of the resulting set.


#### Examples
```javascript
    // Sync
    Ayodis.sadd('key1', 'a', 'b', 'c'); // => (integer) 3
    Ayodis.sadd('key2', 'c', 'd', 'e'); // => (integer) 3
    Ayodis.inter('key1', 'key2'); // => 1) "c"
    Ayodis.inter('key2', 'key1'); // => 1) "c"
    Ayodis.inter('key3', 'key1'); // => (empty list or set)

    // Async
    Ayodis.inter('key1', 'key2', function(err, res) {
        // err => null
        // res => (integer) 1) "c"
    });
    Ayodis.inter('key2', 'key1', function(err, res) {
        // err => null
        // res => (integer) 1) "c"
    });
    Ayodis.inter('key3', 'key1', function(err, res) {
        // err => "empty list or set"
        // res => null
    });
```