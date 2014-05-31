**[SADD](sets/SADD.md)** *key member [member ...] callback* : Add one or more members to a set

**SCARD** *key [key ...] callback* : Subtract multiple sets

**[SDIFF](doc/sets/SDIFF.md)** *destination key [key ...] callback* : Get the value of a hash field

**SDIFFSTORE** *key callback* : Subtract multiple sets and store the resulting set in a key

**SINTER** *key [key ...] callback* : Intersect multiple sets

**SINTERSTORE** *destination key [key ...] callback* : Intersect multiple sets and store the resulting set in a key

**SISMEMBER** *key member callback* : Determine if a given value is a member of a set

**SMEMBERS** *key callback* : Get all the members in a set

**SMOVE** *source destination member callback* : Move a member from one set to another

**SPOP** *key callback* : Remove and return a random member from a set

**SRANDMEMBER** *key [count] callback* : Get one or multiple random members from a set

**SREM** *key member [member ...] callback* : Remove one or more members from a set

**SUNION** *key [key ...] callback* : Add multiple sets

**SUNIONSTORE** *destination key [key ...] callback* : Add multiple sets and store the resulting set in a key