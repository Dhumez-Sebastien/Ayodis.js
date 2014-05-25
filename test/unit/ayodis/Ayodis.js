describe('ayodis/Ayodis', function () {
    'use strict';

    var expect = chai.expect;

    it('Module exists', function () {
        expect(global).to.have.property('Ayodis').and.to.be.an('function');
    });
});