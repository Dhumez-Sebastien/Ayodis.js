describe('ayodis/scard/', function () {
    'use strict';

    it('Add value', function () {
        chai.assert(Ayodis.sadd('memberTest', 'Hello') === 1, 'Assertion Error : Sync field exists already error (0)');
        chai.assert(Ayodis.sadd('memberTest', 'World') === 1, 'Assertion Error : Sync field exists already error (1)');
    });

    it('SCARD Sync', function () {
        // Get value Sync
        chai.assert(Ayodis.scard('memberTest') === 2, 'Assertion Error : Sync invalid field number (0)');

        /**
         * Error
         */
        chai.assert(Ayodis.scard('memberTestUnknown') === 0, 'Assertion Error : Sync err field not 0 (0)');
        chai.assert(Ayodis.scard() === null, 'Assertion Error : Sync err field not null (0)');
        chai.assert(Ayodis.scard({test : 123}) === null, 'Assertion Error : Sync err field not null (1)');
    });

    it('SCARD Async', function () {
        // Add value Sync
        Ayodis.scard('memberTest', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error (0)');
            chai.assert(res === 2, 'Assertion Error : Async invalid field number (0)');
        });

        /**
         * Error
         */
        Ayodis.scard('memberTestUnknown', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async found error (0)');
            chai.assert(res === 0, 'Assertion Error : Async err field not 0 (0)');
        });
        Ayodis.scard(function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async no error found (0)');
            chai.assert(res === null, 'Assertion Error : Async err field not 0 (0)');
        });
        Ayodis.scard({test : 123}, function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async no error found (1)');
            chai.assert(res === null, 'Assertion Error : Async err field not 0 (1)');
        });
    });

    it('Remove and check fields', function () {
        chai.assert(Ayodis.srem('memberTest', 'Hello', 'World') === 2, 'Assertion Error : Sync no fields removed (0)');
        chai.assert(Ayodis.smembers('memberTest').length === 0, 'Assertion Error : All fields have not been deleted');
    });
});