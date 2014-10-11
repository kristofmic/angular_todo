describe('todos factory', function() {

  var
    todos;

  beforeEach(module('ch.Main.Todos'));

  beforeEach(inject(function($injector) {
    todos = $injector.get('todos');
  }));

  it('should exist', function() {
    expect(todos).toBeDefined();
  });

  describe('init()', function() {
    it('should init the model', function() {
      expect(todos.model.length).toBe(0);

      todos.init();

      expect(todos.model.length > 0).toBe(true);
    });
  });

  describe('create()', function() {
    beforeEach(function() {
      todos.init();
    });

    it('should add a new todo to the model', function() {
      var
        todosLength = todos.model.length;

      todos.create('Foobar!');

      expect(todos.model.length).toEqual(todosLength + 1);
      expect(todos.model[todos.model.length - 1].description).toEqual('Foobar!');
    });
  });

  describe('archive()', function() {
    beforeEach(function() {
      todos.init();
    });

    it('should set the archived property to true on the todo', function() {
      var
        todoToArchive = todos.model[0];

      expect(todoToArchive.archived).toBeFalsy();

      todos.archive(todoToArchive);

      expect(todoToArchive.archived).toBeTruthy();
    });
  });

  describe('destroy()', function() {
    beforeEach(function() {
      todos.init();
    });

    it('should remove the todo from the todos model', function() {
      var
        todoToDestroy = todos.model[1];

      todos.destroy(todoToDestroy);

      expect(todos.model[1]).not.toEqual(todoToDestroy);
    });
  });

});