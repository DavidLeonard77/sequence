'use strict';

/**
 * @ngdoc function
 * @name mbcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mbcApp
 */
angular.module('mbcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
