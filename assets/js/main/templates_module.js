angular.module('ch.Main.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('home.html',
    "<h1>{{heading}}</h1>"
  );


  $templateCache.put('main.html',
    "<div class=\"container\" ui-view></div>"
  );

}]);
