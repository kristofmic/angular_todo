angular.module('ch.Main.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('main.html',
    "<div class=\"container\" ng-controller=\"mainController\"><div ng-include=\"'todos.html'\"></div></div>"
  );


  $templateCache.put('todos.html',
    "<div id=\"todos\" ng-controller=\"todosController\"><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><form novalidate role=\"form\" name=\"newTodoForm\" ng-submit=\"addTodo(newTodo)\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" ng-model=\"newTodo\"> <span class=\"input-group-btn\"><button type=\"submit\" class=\"btn btn-primary\" type=\"button\">Add</button></span></div></form></div></div><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><h4 ng-if=\"!todos.length\">No To Do's. Add something and get to it!</h4><table class=\"table table-hover\" ng-if=\"todos.length\"><tr><th></th><th>To Do</th><th></th></tr><tr ng-repeat=\"todo in todos track by $index\" ng-class=\"{completed: todo.completed}\"><td width=\"15px\"><input type=\"checkbox\" ng-model=\"todo.completed\"></td><td class=\"description\">{{todo.description}}</td><td width=\"15px\"><button type=\"button\" class=\"close\" ng-click=\"destroyTodo($index)\"><span aria-hidden=\"true\" class=\"text-danger\">&times;</span> <span class=\"sr-only\">Close</span></button></td></tr></table></div></div></div>"
  );

}]);
