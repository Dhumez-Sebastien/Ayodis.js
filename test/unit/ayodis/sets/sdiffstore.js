describe('ayodis/sdiffstore/', function () {
    'use strict';

    it('SDIFFSTORE :: Add values', function () {
        chai.assert(Ayodis.sadd('key1', 'a', 'b', 'c') === 3, 'Assertion Error : Add value (0)');
        chai.assert(Ayodis.sadd('key2', 'c', 'd', 'e') === 3, 'Assertion Error : Add value (1)');
    });

    it('SDIFFSTORE Sync', function () {
        // Add value Sync
        chai.assert(Ayodis.sdiffstore('distKey', 'key1', 'key2', 'key3') === 2, 'Assertion Error : Sync field exists already error (0) :: '+Ayodis.sdiffstore('distKey', 'key1', 'key2', 'key3'));
        chai.assert(Ayodis.sdiffstore('distKey', 'key1', 'key2') === 2, 'Assertion Error : Sync field exists already error (1) :: '+Ayodis.sdiffstore('distKey', 'key1', 'key2', 'key3'));
        chai.assert(Ayodis.sdiffstore('distKey', 'key3', 'key2', 'key1') === 0, 'Assertion Error : Sync field exists already error (2) :: '+Ayodis.sdiffstore('distKey', 'key3', 'key2', 'key1'));

        // Check value
        chai.assert(Ayodis.smembers('distKey').length === 2, 'Assertion Error : Sync length error (0) :: '+Ayodis.smembers('distKey').length);

        // Errors
        chai.assert(Ayodis.sdiffstore('distKey') === null, 'Assertion Error : Sync error (0) :: '+Ayodis.sdiffstore('distKey'));
        chai.assert(Ayodis.sdiffstore('distKey', 'key1') === null, 'Assertion Error : Sync error (0) :: '+Ayodis.sdiffstore('distKey', 'key1'));
        chai.assert(Ayodis.sdiffstore('distKey', 'key1', 22) === null, 'Assertion Error : Sync error (0) :: '+Ayodis.sdiffstore('distKey', 'key1'));
        chai.assert(Ayodis.sdiffstore('distKey', 22, 'key1') === null, 'Assertion Error : Sync error (0) :: '+Ayodis.sdiffstore('distKey', 'key1'));
        chai.assert(Ayodis.sdiffstore(undefined, 'key1', 'key2') === null, 'Assertion Error : Sync error (0) :: '+Ayodis.sdiffstore('distKey', 'key1'));
    });

    it('SDIFFSTORE Async', function () {
        var asyncErr = 0;

        // Add value Async
        Ayodis.sdiffstore('distKey', 'key1', 'key2', 'key3', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === 2, 'Assertion Error : Async field no found ('+(asyncErr++)+')');
        });
        Ayodis.sdiffstore('distKey', 'key1', 'key2', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === 2, 'Assertion Error : Async field no found ('+(asyncErr++)+')');
        });
        Ayodis.sdiffstore('distKey', 'key3', 'key2', 'key1', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === 0, 'Assertion Error : Async field no found ('+(asyncErr++)+')');
        });

        // Check value
        Ayodis.smembers('distKey', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res.length === 2, 'Assertion Error : Async field no found ('+(asyncErr++)+')');
        });

        // Err
        Ayodis.sdiffstore('distKey', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === null, 'Assertion Error : Async field found ('+(asyncErr++)+')');
        });
        Ayodis.sdiffstore('distKey', 'key1', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === null, 'Assertion Error : Async field found ('+(asyncErr++)+')');
        });
        Ayodis.sdiffstore('distKey', 'key1', 22, function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === null, 'Assertion Error : Async field found ('+(asyncErr++)+')');
        });
        Ayodis.sdiffstore('distKey', 22, 'key1', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === null, 'Assertion Error : Async field found ('+(asyncErr++)+')');
        });
        Ayodis.sdiffstore(undefined, 'key1', 'key2', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async found error ('+(asyncErr++)+')');
            chai.assert(res === null, 'Assertion Error : Async field found ('+(asyncErr++)+')');
        });

    });

    it('Remove Field', function () {
        // Remove value
        chai.assert(Ayodis.srem('distKey', 'a', 'b') === 2, 'Assertion Error : All items have not been removed (0)');
        chai.assert(Ayodis.srem('key1', 'a', 'b', 'c') === 3, 'Assertion Error : All items have not been removed (1)');
        chai.assert(Ayodis.srem('key2', 'c', 'd', 'e') === 3, 'Assertion Error : All items have not been removed (2)');
    });

    it('Check if hash is empty', function () {
        // Check if fields are removed correctly
        chai.assert(Ayodis.smembers('distKey').length === 0, 'Assertion Error : All fields have not been deleted (0)');
        chai.assert(Ayodis.smembers('key1').length === 0, 'Assertion Error : All fields have not been deleted (1)');
        chai.assert(Ayodis.smembers('key2').length === 0, 'Assertion Error : All fields have not been deleted (2)');
    });
});