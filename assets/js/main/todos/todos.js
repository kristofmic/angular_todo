(function(angular) {

  var
    factoryDefinitions,
    serviceDefinitions;

  factoryDefinitions = [
    todosFactory
  ];

  serviceDefinitions = [
    todosService
  ];

  angular.module('ch.Main.Todos')
    .factory('todos', factoryDefinitions)
    .service('todosService', serviceDefinitions);

  function todosFactory() {
    var
      model = [];

    return {
      init: init,
      create: create,
      archive: archive,
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
        completed: false,
        archived: false
      });
    }

    function archive(todo) {
      todo.archived = true;
    }

    function destroy(todo) {
      model.forEach(function (td, i) {
        if (td === todo) {
          model.splice(i, 1);
        }
      });
    }
  }

  function todosService() {
    this.init = init;
    this.create = create;
    this.archive = archive;
    this.destroy = destroy;
    this.model = [];

    function init() {
      if (!this.model.length) {
        angular.forEach(data(), function(td) {
          this.model.push(td);
        }, this);
      }
    }

    function create(newTodo) {
      this.model.push({
        description: newTodo,
        completed: false,
        archived: false
      });
    }

    function archive(todo) {
      todo.archived = true;
    }

    function destroy(todo) {
      this.model.forEach(function (td, i) {
        if (td === todo) {
          this.model.splice(i, 1);
        }
      }, this);
    }
  }

  function data() {
    return [
      {
        description: 'Build a todo app',
        completed: false,
        archived: false
      },
      {
        description: 'Teach angular',
        completed: false,
        archived: false
      },
      {
        description: 'Take over the world',
        completed: false,
        archived: false
      },
      {
        description: 'Feed Boomer the cat',
        completed: true,
        archived: false
      },
      {
        description: 'Clean Boomer\'s litter box',
        completed: true,
        archived: true
      }
    ];
  }

})(angular);