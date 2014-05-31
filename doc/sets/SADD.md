### SADD key member [member ...]

Add the specified members to the set stored at key. Specified members
that are already a member of this set are ignored. If key does not
exist, a new set is created before adding the specified members.

An error is returned when the value stored at key is not a set.

#### Return value
**Integer reply**: the number of elements that were added to the set, not including all the elements already present into the set.


#### Examples
```javascript
    // Sync
    Ayodis.sadd('mySet', 'Hello'); // => (integer) 1
    Ayodis.sadd('mySet', 'World'); // => (integer) 1
    Ayodis.sadd('mySet', 'World'); // => (integer) 0
    Ayodis.smembers('mySet'); // => 1) "Hello", 2) "World"
    
    // Clear data
    Ayodis.srem('mySet', 'Hello', 'World'); // => (integer) 2

    // Async
    Ayodis.sadd('myHash', 'Ayolan', 'MMORPG', function(err, res) {
        // err :: null
        // res => (integer) 2
    });
    Ayodis.smembers('mySet'); // => 1) "Ayolan", 2) "MMORPG"
    Ayodis.srem('mySet', 'Ayolan', 'MMORPG'); // => (integer) 2
```