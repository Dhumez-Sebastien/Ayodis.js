describe('ayodis/hdel/', function () {
    'use strict';

    it('Add Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest_HDEL1', 'GoHome');
        Ayodis.hset('hashTest', 'fieldTest_HDEL2', 'GoHome');

        Ayodis.hset('hashTest', 'fieldTest_HDEL30', 'GoHome');
        Ayodis.hset('hashTest', 'fieldTest_HDEL31', 'GoHome');

        Ayodis.hset('hashTest', 'fieldTest_HDEL40', 'GoHome');
        Ayodis.hset('hashTest', 'fieldTest_HDEL41', 'GoHome');

    });

    it('HDEL Sync', function () {
        // Check value Sync
        chai.assert(Ayodis.hdel('hashTest', 'fieldTest_HDEL1') === 1, 'Assertion Error : Sync Delete reply error (1)');
        chai.assert(Ayodis.hdel('hashTest', 'fieldTest_HDEL1') === 0, 'Assertion Error : Sync Delete reply error (0)');

        chai.assert(Ayodis.hdel('hashTest', 'fieldTest_HDEL30', 'fieldTest_HDEL31') === 2, 'Assertion Error : Sync Delete multi reply error (0)');
        chai.assert(Ayodis.hdel('hashTest', 'fieldTest_HDEL30', 'fieldTest_HDEL31') === 0, 'Assertion Error : Sync Delete multi reply error (1)');
    });

    it('HDEL Async', function () {
        // Check value Async
        Ayodis.hdel('hashTest', 'fieldTest_HDEL2', function(err, reply) {
            chai.assert(reply === 1, 'Assertion Error : Async Delete reply error (1)');
        });
        Ayodis.hdel('hashTest', 'fieldTest_HDEL2', function(err, reply) {
            chai.assert(reply === 0, 'Assertion Error : Async Delete reply error (0)');
        });

        Ayodis.hdel('hashTest', 'fieldTest_HDEL40', 'fieldTest_HDEL41', function(err, reply) {
            chai.assert(reply === 2, 'Assertion Error : Async Delete multi reply error (0)');
        });
        Ayodis.hdel('hashTest', 'fieldTest_HDEL40', 'fieldTest_HDEL41', function(err, reply) {
            chai.assert(reply === 0, 'Assertion Error : Async Delete multi reply error (1)');
        });

    });
});