describe('ayodis/hexists/', function () {
    'use strict';

    it('Add, Get and Remove Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest_HEXISTS', 'GoHome');

        // Check value
        chai.assert(Ayodis.hexists('hashTest', 'fieldTest_HEXISTS') == 1, 'Error : Hash/Field was no found');
        chai.assert(Ayodis.hexists('hashTest', 'fieldTest') == 0, 'Error : Hash/Field was found');

        // Remove value
        Ayodis.hdel('hashTest', 'fieldTest_HEXISTS')
    });
});