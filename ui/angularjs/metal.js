
  function metalController($scope){
     $scope.name = "it is metal";
  }
  metalController.$inject = ['$scope'];
  angular.module('MyApp').controller('metalController',metalController);
