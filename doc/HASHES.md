**[HDEL](doc/hashes/HDEL.md)** *key field [field ...] callback* : Delete one or more hash fields

**HEXISTS** *key field callback* : Determine if a hash field exists

**HGET** *key field callback* : Get the value of a hash field

**HGETALL** *key callback* : Get all the fields and values in a hash

**HINCRBY** *key field increment callback* : Increment the integer value of a hash field by the given number

**HINCRBYFLOAT** *key field increment callback* : Increment the float value of a hash field by the given amount

**HKEYS** *key callback* : Get all the fields in a hash

**HLEN** *key callback* : Get the number of fields in a hash

**HMGET** *key field [field ...] callback* : Get the values of all the given hash fields

**HMSET** *key field value [field value ...] callback* : Set multiple hash fields to multiple values

**HSET** *key field value callback* : Set the string value of a hash field

**HSETNX** *key field value* callback : Set the value of a hash field, only if the field does not exist

**HVALS** *key callback* : Get all the values in a hash