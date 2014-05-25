describe('ayodis/hash/', function () {
    'use strict';

    it('hgetall', function () {
        // Add value
        Ayodis.hset('hashTest', 'fieldTest', 'GoHome');

        chai.assert(Ayodis.hgetall('hashTest').length == 2, 'Error : Value was not correctly get');

        // Null field
        chai.assert(Ayodis.hgetall('hashTestUnknown').length == 0, 'Error : Hash/Fields was found');
    });

    it('hkeys', function () {
        chai.assert(Ayodis.hkeys('hashTest').length == 1, 'Error : Value was not correctly get');

        // Null field
        chai.assert(Ayodis.hkeys('hashTestUnknown').length == 0, 'Error : Hash/Fields was found');
    });

    it('hlen', function () {
        chai.assert(Ayodis.hlen('hashTest') == 1, 'Error : Value was not correctly get');

        // Null field
        chai.assert(Ayodis.hlen('hashTestUnknown') == 0, 'Error : Hash/Fields was found');
    });

    it('hmget', function () {
        chai.assert(Ayodis.hmget('hashTest', 'field1', 'field2', 'field3').length == 3, 'Error : Value was not correctly get');
    });

    it('hdel', function () {
        chai.assert(Ayodis.hdel('hashTest', 'fieldTest') == 1, 'Error : Hash/Field was found');
        chai.assert(Ayodis.hdel('hashTest', 'fieldTest') == 0, 'Error : Hash/Field was not correctly deleted');
    });
});