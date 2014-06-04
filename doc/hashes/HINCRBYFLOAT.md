### HINCRBYFLOAT key field increment

Increment the specified *field* of an hash stored at *key*, and representing
a floating point number, by the specified *increment*. If the field does
not exist, it is set to *0* before performing the operation. An error is
returned if one of the following conditions occur:

- The field contains a value of the wrong type (not a string).
- The current field content or the specified increment are not parsable as a double precision floating point number.

The exact behavior of this command is identical to the one of the
**INCRBYFLOAT** command, please refer to the documentation of **INCRBYFLOAT**
for further information.

#### Return value
**Bulk string reply**: the value of *field* after the increment.


#### Examples
```javascript
    // Sync
    Ayodis.hset('myhash', 'field1', 10.50); // => (integer) 1
    Ayodis.hincrbyfloat('myhash', 'field1', 0.1); // => (integer) 10.6
    Ayodis.hincrbyfloat('myhash', 'field1', 5.3); // => (integer) 15.9

    // Async
    Ayodis.hincrbyfloat('myhash', 'field1', -5.4 , function(err, res) {
        // err => null
        // res => (integer) 10.5
    });
    Ayodis.hincrbyfloat('myhash', 'field1', 2.5 , function(err, res) {
        // err => null
        // res => (integer) 13.0
    });
```