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
    $scope.todos = initTodos();
    $scope.addTodo = addTodo;
    $scope.removeTodo = removeTodo;

    function addTodo(newTodo) {
      $scope.todos.push({
        description: newTodo,
        completed: false
      });

      $scope.newTodo = '';
    }

    function removeTodo(i) {
      $scope.todos.splice(i, 1);
    }

    function initTodos() {
      return [
        {
          description: 'Build a todo app',
          completed: false
        },
        {
          description: 'Teach angular',
          completed: false
        },
        {
          description: 'Take over the world',
          completed: false
        },
        {
          description: 'Feed Boomer the cat',
          completed: true
        }
      ];
    }
  }
})(angular);