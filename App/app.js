angular.module('madLibs',[])
  .controller('MadCtrl', ['$scope', function($scope) {
    $scope.inputs = {
      name:"",
      jobTitle:"",
      tediousTask:"",
      dirtyTask:"",
      celebrity:"",
      uselessSkill:"",
      adjective:"",
      obnoxiuousCelbertity:"",
      hugeNumber:""
    };

    var initialInputs = angular.copy($scope.inputs);

    $scope.reset = function(){
      $scope.inputs = initialInputs;
      $scope.ngMadForm.$setPristine();
    };

    $scope.gender = 'Female';

    $scope.showInstructions = true;
    $scope.showMadLib = false;


  }]);

