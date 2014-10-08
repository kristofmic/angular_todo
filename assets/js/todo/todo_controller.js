(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    todoController
  ];

  angular.module('ch.Todo')
    .controller('todoController', definitions);

  function todoController($scope) {

  }

})(angular);