(function(angular) {

  var
    definitions;

  definitions = [
    '$state',
    activeNavDirective
  ];

  angular.module('ch.ActiveNav')
    .directive('chActiveNav', definitions);

  function activeNavDirective($state) {

    return {
      restrict: 'A',
      replace: false,
      scope: {
        targetState: '@chActiveNav'
        // bar: =myObjectBinding,
        // baz: &myFunction
      },
      link: linker
      // controller
      // compile
      // transclude
      // template / templateUrl
    };

    function linker(scope, elem, attrs) {
      handleStateChange(null, $state.current);
      scope.$on('$stateChangeSuccess', handleStateChange);

      function handleStateChange(e, toState) {
        if (toState.name === scope.targetState) {
          elem.addClass('active');
        }
        else {
          elem.removeClass('active');
        }
      }
    }

  }

})(angular);