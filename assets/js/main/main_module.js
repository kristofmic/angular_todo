(function(angular) {

  var
    dependencies;

  dependencies = [
    'ngTouch',
    'ch.ActiveNav',
    'ch.Main.Templates',
    'ch.Main.States',
    'ch.Main.Todos',
    'ch.Main.Archive'
  ];

  angular.module('ch.Main', dependencies);

})(angular);