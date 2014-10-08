angular.module('ch.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('todo.html',
    "<div class=\"container\" ui-view></div>"
  );


  $templateCache.put('todos.html',
    "<h1>Hello World</h1>"
  );

}]);
