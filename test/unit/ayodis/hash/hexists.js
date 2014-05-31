describe('ayodis/hexists/', function () {
    'use strict';

    it('Add Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest_HEXISTS', 'GoHome');
    });

    it('HEXISTS Sync', function () {
        // Check value Sync
        chai.assert(Ayodis.hexists('hashTest', 'fieldTest_HEXISTS') === 1, 'Assertion Error : Sync value error (1) :: '+Ayodis.hexists('hashTest', 'fieldTest_HEXISTS'));
        chai.assert(Ayodis.hexists('hashTest', 'fieldTest') === 0, 'Assertion Error : Sync value error (0)');
    });

    it('HEXISTS Async', function () {
        // Check value Async
        Ayodis.hexists('hashTest', 'fieldTest_HEXISTS', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async get error (0)');
            chai.assert(res === 1, 'Assertion Error : Async value error (1)');
        });
        Ayodis.hexists('hashTest', 'fieldTest', function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async get error (1) :: '+err);
            chai.assert(res === 0, 'Assertion Error : Async value error (0)');
        });
    });

    it('Remove Hash Field', function () {
        // Remove value
        Ayodis.hdel('hashTest', 'fieldTest_HEXISTS');
    });
});