# Ayodis

Ayodis is a sample lib based on redis to use a key/value system on client side.

## Getting Started

___________________________________________________________________________


### HTML

```html
<script src="underscore.min.js" type="text/javascript"></script>
<script src="underscore.contrib.min.js" type="text/javascript"></script>
<script src="ayodis.js" type="text/javascript"></script>
```


### Usage

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

// With callback
Ayodis.hget('myHash', 'field', function(err, res) {
    if (err) throw(err);
    
    console.log(res); // => My Super value
});

```

#### Commands

Doc about command : [Redis commands](http://redis.io/commands)

Commands available : 


##### Hashes

- HDEL
- HEXISTS
- HGET
- HGETALL
- HINCRBY
- HINCRBYFLOAT
- HKEYS
- HLEN
- HMGET
- HMSET
- HSET
- HSETNX
- HVALS

##### Sets

- SADD
- SMEMBERS
- SREM
