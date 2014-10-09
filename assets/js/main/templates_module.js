angular.module('ch.Main.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('main.html',
    "<div class=\"container\" ui-view></div>"
  );


  $templateCache.put('todo.html',
    "<h1>{{heading}}</h1>"
  );

}]);
