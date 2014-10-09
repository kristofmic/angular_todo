(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    todoController
  ];

  angular.module('ch.Main.Todo')
    .controller('todoController', definitions);

  function todoController($scope) {
    $scope.heading = 'To Do\'s!';
  }
})(angular);