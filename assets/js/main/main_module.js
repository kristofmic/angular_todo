(function(angular) {

  var
    dependencies;

  dependencies = [
    'ngTouch',
    'ch.Main.Templates',
    'ch.Main.States',
    'ch.Main.Todo'
  ];

  angular.module('ch.Main', dependencies);

})(angular);