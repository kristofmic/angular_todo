(function(angular) {
  var
    definition;

  definition = [
    '$stateProvider',
    '$urlRouterProvider',
    statesConfig
  ];

  angular.module('ch.Main.States')
    .config(definition);

  function statesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/todo');

    $stateProvider
      .state('main', {
        abstract: true,
        templateUrl: 'main.html',
        controller: 'mainController'
      })
      .state('main.todo', {
        url: '/todo',
        templateUrl: 'todo.html',
        controller: 'todoController'
      })
      .state('main.done', {
        url: '/done',
        templateUrl: 'done.html',
        controller: 'doneController'
      });
  }
})(angular);