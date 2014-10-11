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
      archive: jasmine.createSpy('archive'),
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

    it('should set the activeTodos equal tot he number of non-archived todos', function() {
      expect(scope.activeTodos).toEqual(4);
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

    it('should increment the activeTodos by 1', function() {
      expect(scope.activeTodos).toEqual(4);

      scope.addTodo({});

      expect(scope.activeTodos).toEqual(5);
    });
  });

  describe('archiveTodo()', function() {
    it('should arcive the todo', function() {
      scope.archiveTodo({ baz: 'boo' });

      expect(todosStub.archive).toHaveBeenCalledWith({ baz: 'boo' });
    });

    it('should decrement the activeTodos by 1', function() {
      expect(scope.activeTodos).toEqual(4);

      scope.archiveTodo({});

      expect(scope.activeTodos).toEqual(3);
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