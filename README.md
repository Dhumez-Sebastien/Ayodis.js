# Ayodis

Ayodis is a sample lib based on redis to use a key/value system on client side.


## Usage

```javascript
// Set hash
Ayodis.hset('myHash', 'field', 'My Super value');
    
var res = Ayodis.hget('myHash', 'field');
console.log(res); // => My Super value
```