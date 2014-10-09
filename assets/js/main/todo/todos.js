(function(angular) {

  var
    definitions;

  definitions = [
    todosFactory
  ];

  angular.module('ch.Main.Todo')
    .factory('todos', definitions);

  function todosFactory() {
    var
      model = [];

    return {
      init: init,
      create: create,
      destroy: destroy,
      model: model
    };

    function init() {
      if (!model.length) {
        angular.forEach(data(), function(td) {
          model.push(td);
        });
      }
    }

    function create(newTodo) {
      model.push({
        description: newTodo,
        completed: false
      });
    }

    function destroy(i) {
      model.splice(i, 1);
    }

    function data() {
      return [
        {
          description: 'Build a todo app',
          completed: false
        },
        {
          description: 'Teach angular',
          completed: false
        },
        {
          description: 'Take over the world',
          completed: false
        },
        {
          description: 'Feed Boomer the cat',
          completed: true
        }
      ];
    }
  }

})(angular);