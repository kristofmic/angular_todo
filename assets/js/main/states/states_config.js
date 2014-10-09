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
      .otherwise('/home');

    $stateProvider
      .state('main', {
        abstract: true,
        templateUrl: 'main.html',
        controller: 'mainController'
      })
      .state('main.home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'homeController'
      });
  }
})(angular);