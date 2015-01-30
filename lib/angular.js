/* global angular */

var birthdayApp = angular.module('birthdayApp', []);

birthdayApp.controller('BirthdayListCtrl', function ($scope) {
    'use strict';
    $scope.allBirthdays = [];

    $scope.newBirthday = function() {
        $scope.allBirthdays = $scope.allBirthdays.concat([
            {name: $scope.name, birthday: $scope.birthday}
        ]);

        $scope.name = '';
        $scope.birthday = '';
    };
});
