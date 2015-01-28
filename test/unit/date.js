/* global describe, it, require */
/* jshint expr: true */

var expect = require('chai').expect; 
var date = require('../../lib/date');

describe('date', function () {
    'use strict';

    describe('hasBirthday', function () {
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
