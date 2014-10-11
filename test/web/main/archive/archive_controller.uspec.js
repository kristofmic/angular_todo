describe('archiveController', function() {

  var
    controller,
    scope,
    todosStub;

  beforeEach(module('ch.Main.Archive'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    todosStub = {
      init: jasmine.createSpy('init'),
      destroy: jasmine.createSpy('destroy'),
      model: setTodosModel()
    };

    controller = $controller('archiveController', {
      $scope: scope,
      todos: todosStub
    });
  }));

  it('should exist', function() {
    expect(controller).toBeDefined();
  });

  describe('initialization', function() {
    it('should init the todos service', function() {
      expect(todosStub.init).toHaveBeenCalled();
    });

    it('should set the todos equal to the todos model', function() {
      expect(scope.todos).toEqual(todosStub.model);
    });

    it('should set the archivedTodos equal tot he number of archived todos', function() {
      expect(scope.archivedTodos).toEqual(1);
    });
  });

  describe('removeTodo()', function() {
    var
      todoToDestroy,
      archivedTodos;

    beforeEach(function() {
      archivedTodos = 1;
      todoToDestroy = scope.todos[1];

      scope.removeTodo(todoToDestroy);
    });

    it('should destroy the todo', function() {
      expect(todosStub.destroy).toHaveBeenCalledWith(todoToDestroy);
    });

    it('should decrement the number of archived todos', function() {
      expect(scope.archivedTodos).toEqual(archivedTodos - 1);
    });
  });

  function setTodosModel() {
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
});