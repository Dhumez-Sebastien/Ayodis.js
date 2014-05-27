describe('ayodis/hsetnx/', function () {
    'use strict';

    it('HSETNX Sync', function () {
        // Add value Sync
        chai.assert(Ayodis.hsetnx('hashTest', 'field1', 'Hello') == 1, 'Assertion Error : Sync field exists already error (1)');
        chai.assert(Ayodis.hsetnx('hashTest', 'field1', 'World') == 0, 'Assertion Error : Sync field was not added correctly error (0)');

        chai.assert(Ayodis.hsetnx('hashTest', 'field1', JSON.stringify({ maison : "red"})) == 0, 'Assertion Error : Sync field was not added correctly error (0)');
        chai.assert(Ayodis.hsetnx('hashTest', 'field1', '') == 0, 'Assertion Error : Sync field was not added correctly error (0)');

        /**
         * Error entry
         */

        // Add value but forget field willingly
        chai.assert(Ayodis.hsetnx(123, 'World') === null, 'Assertion Error : Sync must show error');

        // Wrong data type as hash
        chai.assert(Ayodis.hsetnx(function() { console.log('test');}, 'World', 'dash') === null, 'Assertion Error : Sync must show error');
    });

    it('HSETNX Async', function () {
        // Add value Adync
        Ayodis.hsetnx('hashTest', 'field2', 'Ayolan', function(err, res) {
            chai.assert(res == 1, 'Assertion Error : Async field exists already error (1)');
        });
        Ayodis.hsetnx('hashTest', 'field2', 'MMORPG', function(err, res) {
            chai.assert(res == 0, 'Assertion Error : Sync field was not added correctly error (0)');
        });

        /**
         * Error entry
         */
        Ayodis.hsetnx('hashTest', 'MMORPG', function(err, res) {
            chai.assert(err == ERR_HSETNX, 'Assertion Error : Async :: err :: must show error');
            chai.assert(res == null, 'Assertion Error : Async :: res :: must be empty');
        });
    });

    it('Check Field', function () {
        // Check value
        chai.assert(Ayodis.hget('hashTest', 'field1') == 'Hello', 'Error : Hash/Field was incorrect (Hello)');
        chai.assert(Ayodis.hget('hashTest', 'field2') == 'Ayolan', 'Error : Hash/Field was incorrect (Ayolan)');
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