/* globals describe, it */
/* jshint expr: true */

var expect = require('chai').expect; 

describe('date', function () {
    describe('hasBirthday', function () {
        it('returns true if the current day and month match the given birthday', function () {
            var birthday = new Date();
            birthday.setFullYear(1974);
            expect(date.hasBirthday(birthday)).to.be.ok;
        });
    });
});
