(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    todosController
  ];

  angular.module('ch.Todo')
    .controller('todosController', definitions);

  function todosController($scope) {

  }

})(angular);