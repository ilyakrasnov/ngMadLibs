angular.module('madLibs',[])
  .controller('MadCtrl', ['$scope', function($scope) {
    $scope.initialInputs = {
      name:'Name',
      jobTitle:'Job Title',
      tediousTask:'Tedious Task',
      dirtyTask:'Dirty Task',
      celebrity:'Celebrity',
      uselessSkill:'Useless Skill',
      adjective:'Adjective',
      obnoxiuousCelbertity:'Obnoxiuous Celbertity',
      hugeNumber:'Huge Number'
    };

    $scope.inputs = $scope.initialInputs;

    $scope.reset = function(){
      $scope.inputs = $scope.initialInputs;
    };

    $scope.gender = 'Female';

    $scope.showInstructions = true;
    $scope.showMadLib = false;


  }]);

