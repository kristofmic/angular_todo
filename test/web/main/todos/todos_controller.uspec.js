describe('todosController', function() {

  var
    controller,
    scope,
    todosStub;

  beforeEach(module('ch.Main.Todos'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    todosStub = {
      init: jasmine.createSpy('init'),
      create: jasmine.createSpy('create'),
      destroy: jasmine.createSpy('destroy'),
      model: setTodosModel()
    };

    controller = $controller('todosController', {
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

  });

  describe('addTodo()', function() {
    it('should create a new todo', function() {
      scope.addTodo({ foo: 'bar' });

      expect(todosStub.create).toHaveBeenCalledWith({ foo: 'bar' });
    });

    it('should reset the newTodo viewModel', function() {
      scope.newTodo = 'foobar';

      scope.addTodo({});

      expect(scope.newTodo).toBeFalsy();
    });

  });

  describe('destroyTodo()', function() {
    it('should destroy the todo', function() {
      scope.destroyTodo(0);

      expect(todosStub.destroy).toHaveBeenCalledWith(0);
    });
  });

  function setTodosModel() {
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
      },
      {
        description: 'Clean Boomer\'s litter box',
        completed: true
      }
    ];
  }

});