describe('ayodis/hlen/', function () {
    'use strict';

    it('Add Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest_HLEN', 'GoHome');
    });

    it('HLEN Field', function () {
        // Check value Sync
        chai.assert(Ayodis.hlen('hashTest') == 1);
        chai.assert(Ayodis.hlen('hashTestUnknown') == 0);

        // Check value Async
        Ayodis.hlen('hashTest', function(err, reply) {
            chai.assert(reply == 1);
        });
        Ayodis.hlen('hashTestUnknown', function(err, reply) {
            chai.assert(reply == 0);
        });
    });

    it('Remove Hash Field', function () {
        // Remove value
        Ayodis.hdel('hashTest', 'fieldTest_HLEN');
    });
});