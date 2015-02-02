angular.module('madLibs',[])
  .controller('MadCtrl', ['$scope', function($scope) {
    $scope.inputs = {
      femaleName:'Female name!'
    };
  }]);
