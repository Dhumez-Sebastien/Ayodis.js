describe('ayodis/hget/', function () {
    'use strict';

    it('Add, Get and Remove Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest', 'GoHome');

        // Check value
        Ayodis.hget('hashTest', 'fieldTest', function(err, reply) {
            chai.assert(reply == 'GoHome', 'Error : Hash/Field was not added updated');
        });

        // Null value
        Ayodis.hget('hashTest', 'fieldTestUndefined', function(err, reply) {
            chai.assert(reply == null, 'Error : Undefined field was found');
        });

        // Remove value
        Ayodis.hdel('hashTest', 'fieldTest')
    });
});