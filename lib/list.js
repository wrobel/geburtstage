/* global require, module */

var date = require('./date');

module.exports = {
    birthdays: function (birthdayList) {
        'use strict';

        var result = [],
            persons = birthdayList.length,
            person;
        for (var index = 0; index < persons; index += 1) {
            person = birthdayList[index];
            if (date.hasBirthday(person.birthday)) {
                result.push(person.name);
            }
        }
        return result;
    }
};
