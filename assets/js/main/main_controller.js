(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    mainController
  ];

  angular.module('ch.Main')
    .controller('mainController', definitions);

  function mainController($scope) {
    // Use this controller to initialize and bind functions/objects
    // that will live across the app.
  }

})(angular);