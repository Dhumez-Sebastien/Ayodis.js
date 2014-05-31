describe('ayodis/srem/', function () {
    'use strict';

    it('Add value', function () {
        chai.assert(Ayodis.sadd('memberTest', 'Hello') === 1, 'Assertion Error : Sync field exists already error (0)');
        chai.assert(Ayodis.sadd('memberTest', 'World') === 1, 'Assertion Error : Sync field exists already error (1)');
        chai.assert(Ayodis.sadd('memberTest', 'World1') === 1, 'Assertion Error : Sync field exists already error (1)');
        chai.assert(Ayodis.sadd('memberTest', 'World2') === 1, 'Assertion Error : Sync field exists already error (1)');
        chai.assert(Ayodis.sadd('memberTest', 'World3') === 1, 'Assertion Error : Sync field exists already error (1)');
        chai.assert(Ayodis.sadd('memberTest', 'World4') === 1, 'Assertion Error : Sync field exists already error (1)');
    });

    it('SREM Sync', function () {
        // Add value Sync
        chai.assert(Ayodis.srem('memberTest', 'Hello', 'World') === 2, 'Assertion Error : Sync no fields removed (0)');
        chai.assert(Ayodis.srem('memberTest', 'World1') === 1, 'Assertion Error : Sync no fields removed (1)');

        /**
         * Error
         */
        chai.assert(Ayodis.srem() === null, 'Assertion Error : Sync fields found (0)');
        chai.assert(Ayodis.srem('memberTestUnknown') === null, 'Assertion Error : Sync fields found (1)');
        chai.assert(Ayodis.srem('memberTestUnknown', 'noWay') === 0, 'Assertion Error : Sync fields found (2)');
    });

    it('SREM Async', function () {
        // Add value Sync
        Ayodis.srem('memberTest', 'World2', 'World3', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error (0)');
            chai.assert(res === 2, 'Assertion Error : Async field removed no found (0)');
        });
        Ayodis.srem('memberTest', 'World4', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error (0)');
            chai.assert(res === 1, 'Assertion Error : Async field no found (0)');
        });
        Ayodis.srem('memberTestUnknown', 'World4', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error (0)');
            chai.assert(res === 0, 'Assertion Error : Async field found (0)');
        });

        /**
         * Error
         */
        Ayodis.srem(function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async err cannot get error (0)');
            chai.assert(res === null, 'Assertion Error : Async res cannot get error (1)');
        });
        Ayodis.srem(undefined, function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async err cannot get error (2)');
            chai.assert(res === null, 'Assertion Error : Async res cannot get error (3)');
        });
        Ayodis.srem('huhay', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async err cannot get error (2)');
            chai.assert(res === null, 'Assertion Error : Async res cannot get error (3)');
        });
    });

    it('Check if Set is empty', function () {
        // Check if fields are removed correctly
        chai.assert(Ayodis.smembers('memberTest').length === 0, 'Assertion Error : All fields have not been deleted');
    });
});