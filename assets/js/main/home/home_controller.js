(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    homeController
  ];

  angular.module('ch.Main.Home')
    .controller('homeController', definitions);

  function homeController($scope) {
    $scope.heading = 'Hello World!';
  }
})(angular);