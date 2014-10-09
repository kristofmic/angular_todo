(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    doneController
  ];

  angular.module('ch.Main.Done')
    .controller('doneController', definitions);

  function doneController($scope) {
    $scope.heading = 'We done!';
  }

})(angular);