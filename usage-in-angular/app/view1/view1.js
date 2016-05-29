'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    
    // console.log(digGetAwesomeImage("Hello", "#000", "30", "#ccc", 400, 500));
    $scope.getImage = digGetAwesomeImage("Hello", 400, 500);
    $scope.text = "Yooo !!";
}]);