var myApp = angular.module('myApp', ['infinite-scroll']);//create the module and declare the depedency
myApp.controller('MyController', function($scope) {
  $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

  $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];//get the image length
    for(var i = 1; i <= 8; i++) {
      $scope.images.push(last + i);// insert another new 8 elements
    }
  };
});
