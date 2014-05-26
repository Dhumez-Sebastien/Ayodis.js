describe('ayodis/hgetall/', function () {
    'use strict';

    it('Add Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest', 'GoHome');
    });

    it('HGETALL Field', function () {

        // Check value Sync
        chai.assert(Ayodis.hgetall('hashTest').length == 2);
        chai.assert(Ayodis.hgetall('hashTest')[0] == 'fieldTest');
        chai.assert(Ayodis.hgetall('hashTest')[1] == 'GoHome');
        chai.assert(Ayodis.hgetall('hashTestMissing').length == 0);

        // Check value Async
        Ayodis.hgetall('hashTest', function(err, reply) {
            chai.assert(reply.length == 2);
            chai.assert(reply[0] == 'fieldTest');
            chai.assert(reply[1] == 'GoHome');
        });
        Ayodis.hgetall('hashTestMissing', function(err, reply) {
            chai.assert(reply.length == 0, 'Error : Value was not correctly get');
        });
    });

    it('Remove Hash Field', function () {
        // Remove value
        Ayodis.hdel('hashTest', 'fieldTest');
    });
});