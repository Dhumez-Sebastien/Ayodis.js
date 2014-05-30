describe('ayodis/hincrbyfloat/', function () {
    'use strict';

    it('Add Hash Field', function () {
        // Add value
        Ayodis.hset('hashHINCRBY', 'field1', 25.5);
        Ayodis.hset('hashHINCRBY', 'field2', 'Hello');
    });


    it('HINCRBYFLOAT Sync', function () {
        // Get value Sync
        chai.assert(Ayodis.hincrbyfloat('hashHINCRBY', 'field1', 10.5) === '36', 'Assertion Error : Sync cannot add value (0)');
        chai.assert(Ayodis.hincrbyfloat('hashHINCRBY', 'field1', -10.5) === '25.5', 'Assertion Error : Sync cannot add value (1)');
        chai.assert(Ayodis.hincrbyfloat('hashHINCRBY', 'field1', 10) === '35.5', 'Assertion Error : Sync cannot add value (2)');
        chai.assert(Ayodis.hincrbyfloat('hashHINCRBY', 'field1', 0.5) === '36', 'Assertion Error : Sync cannot add value (2)');
        chai.assert(Ayodis.hincrbyfloat('hashHINCRBY', 'field1', -0.5) === '35.5', 'Assertion Error : Sync cannot add value (2)');

        /**
         * Error entry
         */
            // Unknown Hash
        chai.assert(Ayodis.hincrbyfloat('hashHINCRBY', 'field1', 'x') === null, 'Assertion Error : Sync cannot err value (0)');
        chai.assert(Ayodis.hincrbyfloat('hashHINCRBY', 'field2', 10) === null, 'Assertion Error : Sync cannot err value (1)');
        chai.assert(Ayodis.hincrbyfloat('hashHINCRBY', 10) === null, 'Assertion Error : Sync cannot err value (2)');
        chai.assert(Ayodis.hincrbyfloat('hashHINCRBY') === null, 'Assertion Error : Sync cannot err value (3)');
    });

    it('HINCRBYFLOAT Async', function () {
        // Add value Async
        Ayodis.hincrbyfloat('hashHINCRBY', 'field1', 10, function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async get an error (0)');
            chai.assert(res === '45.5', 'Assertion Error : Async cannot add value (0)');
        });
        Ayodis.hincrbyfloat('hashHINCRBY', 'field1', -10, function(err, res) {
            chai.assert(err === null, 'Assertion Error : Async get an error (1)');
            chai.assert(res === '35.5', 'Assertion Error : Async cannot add value (2)');
        });


        /**
         * Error entry
         */
        Ayodis.hincrby('hashHINCRBY', 'field1', 10.5, function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async cannot get an error (0)');
            chai.assert(res === null, 'Assertion Error : Async get error value value (0)');
        });
        Ayodis.hincrby('hashHINCRBY', 'field2', 'x', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async cannot get an error (0)');
            chai.assert(res === null, 'Assertion Error : Async get error value value (0)');
        });
        Ayodis.hincrby('hashHINCRBY', 'field2', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async cannot get an error (0)');
            chai.assert(res === null, 'Assertion Error : Async get error value value (0)');
        });
        Ayodis.hincrby('hashHINCRBY', function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async cannot get an error (0)');
            chai.assert(res === null, 'Assertion Error : Async get error value value (0)');
        });
        Ayodis.hincrby(function(err, res) {
            chai.assert(err !== null, 'Assertion Error : Async cannot get an error (0)');
            chai.assert(res === null, 'Assertion Error : Async get error value value (0)');
        });
    });

    it('Remove Field', function () {
        // Remove value
        Ayodis.hdel('hashHINCRBY', 'field1');
        Ayodis.hdel('hashHINCRBY', 'field2');
    });
});