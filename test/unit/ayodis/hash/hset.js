describe('ayodis/hset/', function () {
    'use strict';

    it('HSET Sync', function () {
        // Add value Sync
        chai.assert(Ayodis.hset('hashTest', 'field1', 'Hello') == 1, 'Assertion Error : Sync field exists already error (1)');
        chai.assert(Ayodis.hset('hashTest', 'field1', 'World') == 0, 'Assertion Error : Sync field was not added correctly error (0)');
    });

    it('HSET Async', function () {
        // Add value Sync
        Ayodis.hset('hashTest', 'field2', 'Ayolan', function(err, res) {
            chai.assert(res == 1, 'Assertion Error : Async field exists already error (1)');
        });
        Ayodis.hset('hashTest', 'field2', 'MMORPG', function(err, res) {
            chai.assert(res == 0, 'Assertion Error : Sync field was not added correctly error (0)');
        });
    });

    it('Remove Field', function () {
        // Remove value
        chai.assert(Ayodis.hdel('hashTest', 'field1') == 1, 'Assertion Error : Delete reply error 1 :: field1');
        chai.assert(Ayodis.hdel('hashTest', 'field2') == 1, 'Assertion Error : Delete reply error 1 :: field2');
    });

    it('Check if hash is empty', function () {
        // Check if fields are removed correctly
        chai.assert(Ayodis.hgetall('hashTest').length == 0, 'Assertion Error : All fields have not been deleted');
    });
});