describe('ayodis/sdiff/', function () {
    'use strict';

    it('SDIFF :: Add values', function () {
        chai.assert(Ayodis.sadd('key1', 'a', 'b', 'c') === 3, 'Assertion Error : Add value (0)');
        chai.assert(Ayodis.sadd('key2', 'c', 'd', 'e') === 3, 'Assertion Error : Add value (1)');
    });

    it('SDIFF Sync', function () {
        // Add value Sync
        chai.assert(Ayodis.sdiff('key1', 'key2', 'key3').length === 2, 'Assertion Error : Sync field exists already error (0) :: '+Ayodis.sdiff('key1', 'key2', 'key3').length);
        chai.assert(Ayodis.sdiff('key1', 'key2', 'key3')[0] === 'a', 'Assertion Error : Sync field exists already error (1)');
        chai.assert(Ayodis.sdiff('key1', 'key2', 'key3')[1] === 'b', 'Assertion Error : Sync field exists already error (2)');

        chai.assert(Ayodis.sdiff('key2', 'key1', 'key3').length === 2, 'Assertion Error : Sync field exists already error (3)');
        chai.assert(Ayodis.sdiff('key2', 'key1', 'key3')[0] === 'd', 'Assertion Error : Sync field exists already error (4)');
        chai.assert(Ayodis.sdiff('key2', 'key1', 'key3')[1] === 'e', 'Assertion Error : Sync field exists already error (5)');

        // Errors
        chai.assert(Ayodis.sdiff('key1') === null, 'Assertion Error : Sync error (0) :: '+Ayodis.sdiff('key1'));
        chai.assert(Ayodis.sdiff('key2') === null, 'Assertion Error : Sync error (1) :: '+Ayodis.sdiff('key2'));
        chai.assert(Ayodis.sdiff('key1', 44) === null, 'Assertion Error : Sync error (2) :: '+Ayodis.sdiff('key1', 44));
        chai.assert(Ayodis.sdiff(undefined, 'key2') === null, 'Assertion Error : Sync error (2) :: '+Ayodis.sdiff('key1', 44));
        chai.assert(Ayodis.sdiff('key3', 'key1', 'key2') === null, 'Assertion Error : Sync field exists already error (6)');

    });

    it('SDIFF Async', function () {
        var asyncErr = 0;

        // Check value Async
        Ayodis.sdiff('key1', 'key2', 'key3', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res.length === 2, 'Assertion Error : Async field no found ('+(asyncErr++)+')');
            chai.assert(res[0] === 'a', 'Assertion Error : Async field no found ('+(asyncErr++)+') :: '+res[0]);
            chai.assert(res[1] === 'b', 'Assertion Error : Async field no found ('+(asyncErr++)+') :: '+res[1]);
        });
        Ayodis.sdiff('key2', 'key1', 'key3', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res.length === 2, 'Assertion Error : Async field no found ('+(asyncErr++)+')');
            chai.assert(res[0] === 'd', 'Assertion Error : Async field no found ('+(asyncErr++)+')');
            chai.assert(res[1] === 'e', 'Assertion Error : Async field no found ('+(asyncErr++)+')');
        });

        // Err
        Ayodis.sdiff('key3', 'key1', 'key2', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === null, 'Assertion Error : Async field found ('+(asyncErr++)+')');
        });
        Ayodis.sdiff('key1', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === null, 'Assertion Error : Async field found ('+(asyncErr++)+')');
        });
        Ayodis.sdiff('key1', 44, function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === null, 'Assertion Error : Async field found ('+(asyncErr++)+')');
        });
        Ayodis.sdiff(undefined, 'key2', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === null, 'Assertion Error : Async field found ('+(asyncErr++)+')');
        });
    });

    it('Remove Field', function () {
        // Remove value
        chai.assert(Ayodis.srem('key1', 'a', 'b', 'c') === 3, 'Assertion Error : All items have not been removed (0)');
        chai.assert(Ayodis.srem('key2', 'c', 'd', 'e') === 3, 'Assertion Error : All items have not been removed (1)');
    });

    it('Check if hash is empty', function () {
        // Check if fields are removed correctly
        chai.assert(Ayodis.smembers('key1').length === 0, 'Assertion Error : All fields have not been deleted (0)');
        chai.assert(Ayodis.smembers('key2').length === 0, 'Assertion Error : All fields have not been deleted (1)');
    });
});