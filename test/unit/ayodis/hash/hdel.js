describe('ayodis/hdel/', function () {
    'use strict';

    it('Add Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest_HDEL1', 'GoHome');
        Ayodis.hset('hashTest', 'fieldTest_HDEL2', 'GoHome');
    });

    it('HDEL Sync', function () {
        // Check value Sync
        chai.assert(Ayodis.hdel('hashTest', 'fieldTest_HDEL1') == 1, 'Assertion Error : Sync Delete reply error (1)');
        chai.assert(Ayodis.hdel('hashTest', 'fieldTest_HDEL1') == 0, 'Assertion Error : Sync Delete reply error (0)');
    });

    it('HDEL Async', function () {
        // Check value Async
        Ayodis.hdel('hashTest', 'fieldTest_HDEL2', function(err, reply) {
            chai.assert(reply == 1, 'Assertion Error : Async Delete reply error (1)');
        });
        Ayodis.hdel('hashTest', 'fieldTest_HDEL2', function(err, reply) {
            chai.assert(reply == 0, 'Assertion Error : Async Delete reply error (0)');
        });
    });
});