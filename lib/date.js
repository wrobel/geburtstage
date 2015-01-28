/* global module */

module.exports = {
    hasBirthday: function (birthday) {
        'use strict';
        var current = new Date();
        return current.getDate() === birthday.getDate() &&
               current.getMonth() === birthday.getMonth();
    }
};
