'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.utils.masks'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {

  $scope.percent = .2;
  $scope.showValue = function () {
    console.log($scope.percent);
  }
});