describe('ayodis/hmset/', function () {
    'use strict';

    it('HMSET Sync', function () {
        // Add values Sync
        chai.assert(Ayodis.hmset('hashTest', 'field1', 'Hello', 'field2', 'World') == Ayodis.__msg.OK, 'Assertion Error : Sync reply error');
        chai.assert(Ayodis.hmset('hashTest', 'field1', 'field2', 'World') == Ayodis.__msg.ERR_HMSET, 'Assertion Error : Sync not reply error');
    });

    it('HMSET Async', function () {
        // Add values Async
        Ayodis.hmset('hashTest', 'field3', 'Ayolan', 'field4', 'MMORPG', function(err, res) {
            chai.assert(err == null, 'Assertion Error : Async get error');
            chai.assert(res == Ayodis.__msg.OK, 'Assertion Error : Async reply error');
        });
        Ayodis.hmset('hashTest', 'field5', 'Hello', 'field4', function(err, res) {
            chai.assert(err == Ayodis.__msg.ERR_HMSET, 'Assertion Error : Async cannot get error');
            chai.assert(res == null, 'Assertion Error : Async reply res');
        });
    });

    it('Check Field', function () {
        // Check value
        chai.assert(Ayodis.hget('hashTest', 'field1') == 'Hello', 'Error : Hash/Field was incorrect (Hello)');
        chai.assert(Ayodis.hget('hashTest', 'field2') == 'World', 'Error : Hash/Field was incorrect (World)');
        chai.assert(Ayodis.hget('hashTest', 'field3') == 'Ayolan', 'Error : Hash/Field was incorrect (Ayolan)');
        chai.assert(Ayodis.hget('hashTest', 'field4') == 'MMORPG', 'Error : Hash/Field was incorrect (MMORPG)');
    });

    it('Remove Field', function () {
        // Remove value
        chai.assert(Ayodis.hdel('hashTest', 'field1') == 1, 'Assertion Error : Delete reply error 1 :: field1');
        chai.assert(Ayodis.hdel('hashTest', 'field2') == 1, 'Assertion Error : Delete reply error 1 :: field2');
        chai.assert(Ayodis.hdel('hashTest', 'field3') == 1, 'Assertion Error : Delete reply error 1 :: field3');
        chai.assert(Ayodis.hdel('hashTest', 'field4') == 1, 'Assertion Error : Delete reply error 1 :: field4');
    });

    it('Check if hash is empty', function () {
        // Check if fields are removed correctly
        chai.assert(Ayodis.hgetall('hashTest').length == 0, 'Assertion Error : All fields have not been deleted');
    });
});