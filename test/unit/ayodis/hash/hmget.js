describe('ayodis/hmget/', function () {
    'use strict';

    it('Add Hash Field', function () {
        // Add value
        Ayodis.hset('hashTest', 'field1', 'GoHome');
        Ayodis.hset('hashTest', 'field2', 'OutHome');
    });

    it('HMGET Sync', function () {
        // Check value Sync
        chai.assert(Ayodis.hmget('hashTest', 'field1', 'field2', 'field3').length == 3, 'Assertion Error : Sync Length error');
        chai.assert(Ayodis.hmget('hashTest', 'field1', 'field2', 'field3')[0] == 'GoHome', 'Assertion Error : Sync Value error (GoHome)');
        chai.assert(Ayodis.hmget('hashTest', 'field1', 'field2', 'field3')[1] == 'OutHome', 'Assertion Error : Sync Value error (OutHome)');
        chai.assert(Ayodis.hmget('hashTest', 'field1', 'field2', 'field3')[2] == null, 'Assertion Error : Sync Value error (null)');

        /**
         * Error
         */
        chai.assert(Ayodis.hmget() == null, 'Assertion Error : Sync Value error (null)');

    });

    it('HMGET Async', function () {
        // Check value Async
        Ayodis.hmget('hashTest', 'field1', 'field2', 'field3', function(err, reply) {
            chai.assert(reply.length == 3, 'Assertion Error : Async Length error');
            chai.assert(reply[0] == 'GoHome', 'Assertion Error : Async Value error (GoHome)');
            chai.assert(reply[1] == 'OutHome', 'Assertion Error : Async Value error (OutHome)');
            chai.assert(reply[2] == null, 'Assertion Error : Async Value error (null)');
        });
    });


        it('Remove Hash Field', function () {
        // Remove value
        Ayodis.hdel('hashTest', 'field1');
        Ayodis.hdel('hashTest', 'field2');
    });
});

