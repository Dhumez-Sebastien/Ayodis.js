describe('ayodis/hkeys/', function () {
    'use strict';

    it('Add Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest_HKEYS', 'GoHome');
    });

    it('HKEYS Field', function () {
        // Check value Sync
        chai.assert(Ayodis.hkeys('hashTest').length == 1, 'Error : Value was not correctly get');
        chai.assert(Ayodis.hkeys('hashTestUnknown').length == 0, 'Error : Hash/Fields was found');

        // Check value Async
        Ayodis.hkeys('hashTest', function(err, reply) {
            chai.assert(reply.length == 1);
            chai.assert(reply == 'fieldTest_HKEYS');
        });
        Ayodis.hkeys('hashTestUnknown', function(err, reply) {
            chai.assert(reply.length == 0);
        });
    });

    it('Remove Hash Field', function () {
        // Remove value
        Ayodis.hdel('hashTest', 'fieldTest_HKEYS');
    });
});