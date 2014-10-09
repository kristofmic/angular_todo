(function(angular) {

  var
    dependencies;

  dependencies = [
    'ngTouch',
    'ch.ActiveNav',
    'ch.Main.Templates',
    'ch.Main.States',
    'ch.Main.Todo',
    'ch.Main.Done'
  ];

  angular.module('ch.Main', dependencies);

})(angular);