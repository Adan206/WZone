'use strict';

/**
 * @ngdoc function
 * @name WeatherZone.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the WeatherZone
 */
 angular.module('WeatherZone')
   .controller('MainCtrl', function ($scope, current, $resource) {
     $scope.current = current.query();
   });
