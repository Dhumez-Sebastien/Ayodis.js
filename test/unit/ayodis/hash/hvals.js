describe('ayodis/hvals/', function () {
    'use strict';

    it('Add Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'field1', 'GoHome');
        Ayodis.hset('hashTest', 'field2', 'OutHome');
    });


    it('HVALS Sync', function () {
        // Get value Sync
        chai.assert(Ayodis.hvals('hashTest').length === 2, 'Assertion Error : Sync cannot get all value (0) :: '+Ayodis.hvals('hashTest').length);
        chai.assert(Ayodis.hvals('hashTest')[0] === 'GoHome', 'Assertion Error : Sync get wrong value (0)');
        chai.assert(Ayodis.hvals('hashTest')[1] === 'OutHome', 'Assertion Error : Sync get wrong value (1)');

        /**
         * Error entry
         */

        // Unknown Hash
        chai.assert(Ayodis.hvals('wrongHash').length === 0, 'Assertion Error : Sync wrong hash found');

        // Add value but forget field willingly
        chai.assert(Ayodis.hvals() === null, 'Assertion Error : Sync no hash sending');

        // Wrong data type as hash
        chai.assert(Ayodis.hvals(123) === null, 'Assertion Error : Sync wrong hash type');
    });

    it('HVALS Async', function () {
        // Add value Adync
        Ayodis.hvals('hashTest', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async get an error');
            chai.assert(res.length === 2, 'Assertion Error : Async cannot get all value (0)');
            chai.assert(res[0] === 'GoHome', 'Assertion Error : Async get wrong value (0)');
            chai.assert(res[1] === 'OutHome', 'Assertion Error : Async get wrong value (1)');
        });

        /**
         * Error entry
         */
            // Unknown Hash
        Ayodis.hvals('wrongHash', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async (wrong Hash) get an error');
            chai.assert(res.length === 0, 'Assertion Error : Async wrong hash found');
        });

        // Wrong data type as hash
        Ayodis.hvals(function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async (wrong Hash) cannot get error');
            chai.assert(res === null, 'Assertion Error : Async res must be null');
        });

    });

    it('Remove Field', function () {
        // Remove value
        Ayodis.hdel('hashTest', 'field1');
        Ayodis.hdel('hashTest', 'field2');
    });
});