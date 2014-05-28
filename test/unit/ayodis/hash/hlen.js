describe('ayodis/hlen/', function () {
    'use strict';

    it('Add Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest_HLEN', 'GoHome', 'Assertion Error : Error on Add Data');
    });

    it('HLEN Sync', function () {
        // Check value Sync
        chai.assert(Ayodis.hlen('hashTest') === 1);
        chai.assert(Ayodis.hlen('hashTestUnknown') === 0);

        /**
         * Error
         */
        chai.assert(Ayodis.hlen() === null, 'Assertion Error : Sync not reply error');
    });

    it('HLEN Async', function () {
        // Check value Async
        Ayodis.hlen('hashTest', function(err, reply) {
            chai.assert(reply === 1);
        });
        Ayodis.hlen('hashTestUnknown', function(err, reply) {
            chai.assert(reply === 0);
        });

        /**
         * Error
         */
        Ayodis.hlen(function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async cannot get error');
            chai.assert(res === null, 'Assertion Error : Async get res');
        });

    });

    it('Remove Hash Field', function () {
        // Remove value
        Ayodis.hdel('hashTest', 'fieldTest_HLEN');
    });
});