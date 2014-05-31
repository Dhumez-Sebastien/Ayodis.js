describe('ayodis/sadd/', function () {
    'use strict';

    it('SADD Sync', function () {
        // Add value Sync
        chai.assert(Ayodis.sadd('memberTest', 'Hello') === 1, 'Assertion Error : Sync field exists already error (0)');
        chai.assert(Ayodis.sadd('memberTest', 'World') === 1, 'Assertion Error : Sync field exists already error (1)');
        chai.assert(Ayodis.sadd('memberTest', 22, 44, 66) === 3, 'Assertion Error : Sync field exists already error (2)');

        chai.assert(Ayodis.sadd('memberTest', 'Hello') === 0, 'Assertion Error : Sync field not exists error (0)');
        chai.assert(Ayodis.sadd('memberTest', 'World') === 0, 'Assertion Error : Sync field not exists error (1)');
        chai.assert(Ayodis.sadd('memberTest', 22, 44) === 0, 'Assertion Error : Sync field not exists error (2)');

        /**
         * Error
         */

        chai.assert(Ayodis.sadd('memberTest') === null, 'Assertion Error : Sync field cannot get error (0)');
        chai.assert(Ayodis.sadd('memberTest', undefined) === null, 'Assertion Error : Sync field cannot get error (0)');
    });

    it('SADD Async', function () {
        // Add value Sync
        Ayodis.sadd('memberTest', 'Ayolan', 'MMORPG', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error (0)');
            chai.assert(res === 2, 'Assertion Error : Async field exists already error (0)');
        });
        Ayodis.sadd('memberTest', 'Ayolan', 'MMORPG', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error (1)');
            chai.assert(res === 0, 'Assertion Error : Async field exists already error (1)');
        });

        /**
         * Error
         */
        Ayodis.sadd('memberTest', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async err cannot get error (0)');
            chai.assert(res === null, 'Assertion Error : Async res cannot get error (1)');
        });
        Ayodis.sadd('memberTest', undefined, function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async err cannot get error (2)');
            chai.assert(res === null, 'Assertion Error : Async res cannot get error (3)');
        });
    });

    it('Remove Field', function () {
        // Remove value
        chai.assert(Ayodis.srem('memberTest', 'Hello', 'World', 22, 44, 66, 'Ayolan', 'MMORPG') === 7, 'Assertion Error : All items have not been removed');
    });

    it('Check if hash is empty', function () {
        // Check if fields are removed correctly
        chai.assert(Ayodis.smembers('memberTest').length === 0, 'Assertion Error : All fields have not been deleted');
    });
});