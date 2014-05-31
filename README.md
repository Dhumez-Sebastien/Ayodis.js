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

## LICENCE

The MIT License

Copyright (c) 2014-2015 DHUMEZ Sébastien

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.