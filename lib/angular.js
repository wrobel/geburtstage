/* global angular, require */
var list = require('./list'),
    birthdayApp = angular.module('birthdayApp', []);

birthdayApp.controller('BirthdayListCtrl', function ($scope) {
    'use strict';
    $scope.allBirthdays = [];
    $scope.birthdays = [];

    $scope.newBirthday = function () {
        $scope.allBirthdays = $scope.allBirthdays.concat([
            {name: $scope.name, birthday: $scope.birthday}
        ]);

        $scope.name = '';
        $scope.birthday = '';

        $scope.birthdays = list.birthdays($scope.allBirthdays);
    };
});
