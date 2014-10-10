angular.module('ch.Main.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('archive.html',
    "<div id=\"archive\"><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><h3>Done To Do's</h3></div></div><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><h4 ng-if=\"!archivedTodos\">You haven't done any To Do's. Stop slacking!</h4><table class=\"table table-hover\" ng-if=\"archivedTodos\"><tr><th></th><th>To Do</th><th></th></tr><tr ng-repeat=\"todo in todos | filter:{archived: true} track by $index\" ng-class=\"{completed: todo.completed}\"><td width=\"15px\"><input type=\"checkbox\" ng-model=\"todo.completed\"></td><td class=\"description\">{{todo.description}}</td><td width=\"15px\"><button type=\"button\" class=\"close\" ng-click=\"removeTodo(todo)\"><i class=\"fa fa-trash-o text-danger\"></i></button></td></tr></table></div></div></div>"
  );


  $templateCache.put('main.html',
    "<div class=\"container\"><div ng-include=\"'nav.html'\"></div><div ui-view></div></div>"
  );


  $templateCache.put('nav.html',
    "<div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><ul class=\"nav nav-pills\"><li ch-active-nav=\"main.todos\"><a ui-sref=\"main.todos\">To Do's</a></li><li ch-active-nav=\"main.archive\"><a ui-sref=\"main.archive\">Archive</a></li></ul></div></div>"
  );


  $templateCache.put('todos.html',
    "<div id=\"todos\"><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><form novalidate role=\"form\" name=\"newTodoForm\" ng-submit=\"addTodo(newTodo)\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" ng-model=\"newTodo\"> <span class=\"input-group-btn\"><button type=\"submit\" class=\"btn btn-primary\" type=\"button\">Add</button></span></div></form></div></div><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><h4 ng-if=\"!activeTodos\">No To Do's. Add something and get to it!</h4><table class=\"table table-hover\" ng-if=\"activeTodos\"><tr><th></th><th>To Do</th><th></th></tr><tr ng-repeat=\"todo in todos | filter:{archived: false}\" ng-class=\"{completed: todo.completed}\"><td width=\"15px\"><input type=\"checkbox\" ng-model=\"todo.completed\"></td><td class=\"description\">{{todo.description}}</td><td width=\"15px\"><button type=\"button\" class=\"close\" ng-click=\"archiveTodo(todo)\"><span aria-hidden=\"true\">&times;</span> <span class=\"sr-only\">Close</span></button></td></tr></table></div></div></div>"
  );

}]);
