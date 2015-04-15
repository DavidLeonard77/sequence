'use strict';


/**
 * @ngdoc overview
 * @name mbcApp
 * @description
 * # mbcApp
 *
 * Main module of the application.
 */

angular
  .module('mbcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .controller("storeCtrl", function($scope, $http) {

      $scope.storeData = {};

        $.get('http://seq-front-end-assessment.s3-website-us-west-2.amazonaws.com/catalog.json', function (data) {

          $scope.storeData = data;
          $scope.$apply();

          $scope.$on('postCarouselDirective', function(scope, element, attrs){    

            // Load cover social icons
            $('.carousel-inner > div:first-child').addClass('active');
            $('#myCarousel li:first-child').addClass('active');

          });

        });

  })
  .directive('postCarouselDirective',function(){
    return function(scope, element, attrs) {
      if (scope.$last) setTimeout(function(){ scope.$emit('postCarouselDirective', element, attrs) }, 1);
    };
  });