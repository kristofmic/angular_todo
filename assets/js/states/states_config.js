(function(angular) {
  var
    definition;

  definition = [
    '$stateProvider',
    '$urlRouterProvider',
    statesConfig
  ];

  angular.module('ch.States')
    .config(definition);

  function statesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/todos');

    $stateProvider
      .state('todo', {
        abstract: true,
        templateUrl: 'todo.html',
        controller: 'todoController'
      })
      .state('todo.todos', {
        url: '/todos',
        templateUrl: 'todos.html',
        controller: 'todosController'
      });
  }
})(angular);