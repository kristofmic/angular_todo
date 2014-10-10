(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$filter',
    'todos',
    archiveController
  ];

  angular.module('ch.Main.Archive')
    .controller('archiveController', definitions);

  function archiveController($scope, $filter, todos) {
    todos.init();

    $scope.todos = todos.model;
    $scope.archivedTodos = $filter('filter')($scope.todos, {archived: true}).length;
    $scope.removeTodo = removeTodo;

    function removeTodo(todo) {
      todos.destroy(todo);
      $scope.archivedTodos -= 1;
    }
  }

})(angular);