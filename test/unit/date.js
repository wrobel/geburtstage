var expect = require('chai').expect; 
var date = require('../../lib/date');

describe('date', function () {
    'use strict';

    describe('fromYyyyMmDd', function () {
        it ('converts format YyyyMmDd to date objects', function () {
            var dateObject = date.fromYyyyMmDd('20131203');
            expect(dateObject.getFullYear()).to.equal(2013);
            expect(dateObject.getMonth()).to.equal(11);
            expect(dateObject.getDate()).to.equal(3);
        });
    });

    describe('hasBirthday', function () {
        it('accepts string parameters', function () {
            function stringBirthday () {
                var pad = function (n) {
                    return n < 10 ? '0' + n : n;
                };
                var d = new Date();
                return '1974' +
                    pad(d.getMonth()+1) +
                    pad(d.getDate());
            }
            expect(date.hasBirthday(stringBirthday())).to.be.ok;
        });

        it('returns true if the current day and month match the given birthday', function () {
            var birthday = new Date();
            birthday.setFullYear(1974);
            expect(date.hasBirthday(birthday)).to.be.ok;
        });

        it('returns false if the current day and month do not match the given birthday', function () {
            var birthday = new Date();
            birthday.setDate(birthday.getDate() + 1);
            birthday.setFullYear(1974);
            expect(date.hasBirthday(birthday)).to.be.not.ok;
        });
    });
});
