describe('todoController', function() {

  var
    controller,
    scope;

  beforeEach(module('ch.Main.Todo'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    controller = $controller('todoController', {
      $scope: scope
    });

  }));

  it('should exist', function() {
    expect(controller).toBeDefined();
  });

  describe('initialization', function() {
    it('should set the heading text', function() {
      expect(scope.heading).toEqual('To Do\'s!');
    });
  });

});