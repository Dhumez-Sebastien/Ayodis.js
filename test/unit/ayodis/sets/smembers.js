describe('ayodis/smembers/', function () {
    'use strict';

    it('Add value', function () {
        chai.assert(Ayodis.sadd('memberTest', 'Hello') === 1, 'Assertion Error : Sync field exists already error (0)');
        chai.assert(Ayodis.sadd('memberTest', 'World') === 1, 'Assertion Error : Sync field exists already error (1)');
    });

    it('SMEMBERS Sync', function () {
        // Add value Sync
        chai.assert(Ayodis.smembers('memberTest').length === 2, 'Assertion Error : Sync no fields found (0)');
        chai.assert(Ayodis.smembers('memberTest')[0] === 'Hello', 'Assertion Error : Sync no fields found (1)');
        chai.assert(Ayodis.smembers('memberTest')[1] === 'World', 'Assertion Error : Sync no fields found (2)');

        /**
         * Error
         */
        chai.assert(Ayodis.smembers() === null, 'Assertion Error : Sync fields found (0)');
        chai.assert(Ayodis.smembers('memberTestUnknown').length === 0, 'Assertion Error : Sync fields found (1)');
    });

    it('SMEMBERS Async', function () {
        // Add value Sync
        Ayodis.smembers('memberTest', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error (0)');
            chai.assert(res.length === 2, 'Assertion Error : Async field no found (0)');
            chai.assert(res[0] === 'Hello', 'Assertion Error : Async field no found (1)');
            chai.assert(res[1] === 'World', 'Assertion Error : Async field no found (2)');
        });
        Ayodis.smembers('memberTestUnknown', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error (0)');
            chai.assert(res.length === 0, 'Assertion Error : Async field no found (0)');
        });

        /**
         * Error
         */
        Ayodis.smembers(function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async err cannot get error (0)');
            chai.assert(res === null, 'Assertion Error : Async res cannot get error (1)');
        });
        Ayodis.smembers(undefined, function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async err cannot get error (2)');
            chai.assert(res === null, 'Assertion Error : Async res cannot get error (3)');
        });
    });

    it('Remove Field', function () {
        // Remove value
        chai.assert(Ayodis.srem('memberTest', 'Hello', 'World') === 2, 'Assertion Error : All items have not been removed');
    });

    it('Check if hash is empty', function () {
        // Check if fields are removed correctly
        chai.assert(Ayodis.smembers('memberTest').length === 0, 'Assertion Error : All fields have not been deleted');
    });
});