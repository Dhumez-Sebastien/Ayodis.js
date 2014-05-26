# Ayodis

Ayodis is a sample lib based on redis to use a key/value system on client side.


## Usage

```javascript
// Set hash
var res = Ayodis.hset('myHash', 'field', 'My Super value');
console.log(res); // => 1 (New field in the hash)

// Set hash with callback
Ayodis.hset('myHash', 'newField', 'My Super value', function(err, res) {
    console.log(res); // => 1 (New field in the hash)
});
Ayodis.hset('myHash', 'field', 'My Super value', function(err, res) {
    console.log(res); // => 0 (Field already exists in hash)
});

var res = Ayodis.hget('myHash', 'field');
console.log(res); // => My Super value
```