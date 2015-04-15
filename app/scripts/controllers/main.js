'use strict';

/**
 * @ngdoc function
 * @name mbcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mbcApp
 */
angular.module('mbcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
