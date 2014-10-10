(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    'todos',
    todosController
  ];

  angular.module('ch.Main.Todos')
    .controller('todosController', definitions);

  function todosController($scope, todos) {
    todos.init();

    $scope.todos = todos.model;
    $scope.addTodo = addTodo;
    $scope.destroyTodo = destroyTodo;

    function addTodo(newTodo) {
      todos.create(newTodo);
      $scope.newTodo = '';
    }

    function destroyTodo(index) {
      todos.destroy(index);
    }

  }
})(angular);