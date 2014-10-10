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
      .otherwise('/todos');

    $stateProvider
      .state('main', {
        abstract: true,
        templateUrl: 'main.html',
        controller: 'mainController'
      })
      .state('main.todos', {
        url: '/todos',
        templateUrl: 'todos.html',
        controller: 'todosController'
      })
      .state('main.archive', {
        url: '/archive',
        templateUrl: 'archive.html',
        controller: 'archiveController'
      });
  }

})(angular);