(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$filter',
    'todosService',
    todosController
  ];

  angular.module('ch.Main.Todos')
    .controller('todosController', definitions);

  function todosController($scope, $filter, todos) {
    todos.init().
      then(function () {
        $scope.activeTodos = $filter('filter')($scope.todos, {archived: false}).length;
      });

    $scope.todos = todos.model;

    $scope.addTodo = addTodo;
    $scope.archiveTodo = archiveTodo;

    function addTodo(newTodo) {
      todos.create(newTodo);
      $scope.newTodo = '';
      $scope.activeTodos += 1;
    }

    function archiveTodo(todo) {
      todos.archive(todo);
      $scope.activeTodos -= 1;
    }


  }
})(angular);