/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global angular, require */
	var list = __webpack_require__(1);

	var birthdayApp = angular.module('birthdayApp', []);

	birthdayApp.controller('BirthdayListCtrl', function ($scope) {
	    'use strict';
	    $scope.allBirthdays = [];
	    $scope.birthdays = [];

	    $scope.newBirthday = function() {
	        $scope.allBirthdays = $scope.allBirthdays.concat([
	            {name: $scope.name, birthday: $scope.birthday}
	        ]);

	        $scope.name = '';
	        $scope.birthday = '';

	        $scope.birthdays = list.birthdays($scope.allBirthdays);
	    };
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* global require, module */

	var date = __webpack_require__(2);

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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* global module */

	module.exports = {
	    hasBirthday: function (birthday) {
	        'use strict';
	        if (typeof birthday === 'string') {
	            birthday = this.fromYyyyMmDd(birthday);
	        }
	        var current = new Date();
	        return current.getDate() === birthday.getDate() &&
	               current.getMonth() === birthday.getMonth();
	    },
	    fromYyyyMmDd: function(date) {
	        'use strict';
	        return new Date(
	            date.substring(0,4),
	            + date.substring(4,6) - 1,
	            date.substring(6,8)
	        );
	    }
	};


/***/ }
/******/ ])