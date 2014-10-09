(function(angular) {
  var
    supportsHistoryApi = !!(window.history && history.pushState),
    definition;

  definition = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    statesConfig
  ];

  angular.module('ch.Main.States')
    .config(definition);

  function statesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    if (supportsHistoryApi) {
      $locationProvider.html5Mode(true);
    }

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