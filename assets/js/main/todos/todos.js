(function(angular) {

  var
    factoryDefinitions,
    serviceDefinitions;

  factoryDefinitions = [
    '$http',
    '$q',
    todosFactory
  ];

  serviceDefinitions = [
    '$http',
    '$q',
    todosService
  ];

  angular.module('ch.Main.Todos')
    .factory('todos', factoryDefinitions)
    .service('todosService', serviceDefinitions);

  function todosFactory($http, $q) {
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
        return $http.get('/api/todos')
          .then(handleRes);
      }
      else {
        var deferred = $q.defer();
        deferred.resolve();
        return deferred.promise;
      }

      function handleRes(res) {
        if (res && res.data) {
          // note that the angular.forEach function is being used versus
          // the navtive Array.prototype.forEach...not for any reason other
          // than cross-browser compatability
          angular.forEach(res.data, function(todo) {
            model.push(todo);
          });
        }
        else {
          return $q.reject(res);
        }
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

  function todosService($http, $q) {
    var
      boundResHandler = handleRes.bind(this);

    this.init = init;
    this.create = create;
    this.archive = archive;
    this.destroy = destroy;
    this.model = [];

    function init() {
      if (!this.model.length) {
        return $http.get('/api/todos')
          .then(boundResHandler);
      }
      else {
        var deferred = $q.defer();
        deferred.resolve();
        return deferred.promise;
      }
    }

    function handleRes(res) {
      if (res && res.data) {
        angular.forEach(res.data, function(todo) {
          this.model.push(todo);
        }, this);
      }
      else {
        return $q.reject(res);
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

})(angular);