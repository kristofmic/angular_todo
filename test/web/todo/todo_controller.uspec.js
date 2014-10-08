describe('todoController', function() {

  var
    controller;

  beforeEach(module('ch.Todo'));

  beforeEach(inject(function($rootScope, $controller) {
    controller = $controller('todoController', {
      $scope: $rootScope.$new()
    });

  }));

  it('should exist', function() {
    expect(controller).toBeDefined();
  });

});