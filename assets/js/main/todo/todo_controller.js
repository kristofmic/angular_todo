(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    'todos',
    todoController
  ];

  angular.module('ch.Main.Todo')
    .controller('todoController', definitions);

  function todoController($scope, todos) {
    todos.init();

    $scope.todos = todos.model;
    $scope.addTodo = addTodo;
    $scope.removeTodo = removeTodo;

    function addTodo(newTodo) {
      todos.create(newTodo);
      $scope.newTodo = '';
    }

    function removeTodo(i) {
      todos.destroy(i);
    }


  }
})(angular);