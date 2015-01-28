var expect = require('chai').expect;

var list = require('../../lib/list');

describe('list', function () {
    describe('birthdays', function () {
        it('returns an array with one name when given a list of two persons, one having birthday today', function () {
            var birthdayList = [
                {name: 'John Doe', birthday: '19741212'},
                {name: 'Hans Mustermann', birthday: '19700101'}
            ];
            expect(list.birthdays(birthdayList).length).to.equal(1);
        });
    });
});
