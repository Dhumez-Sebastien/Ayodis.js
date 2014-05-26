describe('ayodis/hget/', function () {
    'use strict';

    it('Add, Get and Remove Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest', 'GoHome');

        // Check value Sync
        chai.assert(Ayodis.hget('hashTest', 'fieldTest') == 'GoHome', 'Error : Hash/Field was found');
        chai.assert(Ayodis.hget('hashTest', 'fieldTest_HEXISTS') == null, 'Error : Hash/Field was no found');

        // Check value Async
        Ayodis.hget('hashTest', 'fieldTest', function(err, reply) {
            chai.assert(reply == 'GoHome', 'Error : Hash/Field was not added updated');
        });
        Ayodis.hget('hashTest', 'fieldTestUndefined', function(err, reply) {
            chai.assert(reply == null, 'Error : Undefined field was found');
        });

        // Remove value
        Ayodis.hdel('hashTest', 'fieldTest')
    });
});