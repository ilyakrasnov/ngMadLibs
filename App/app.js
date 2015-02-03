angular.module('madLibs',[])
  .controller('MadCtrl', ['$scope', function($scope) {
    $scope.inputs = {
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
    $scope.gender = 'Female';
  }]);

