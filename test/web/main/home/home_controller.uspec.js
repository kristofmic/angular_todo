describe('homeController', function() {

  var
    controller,
    scope;

  beforeEach(module('ch.Main.Home'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    controller = $controller('homeController', {
      $scope: scope
    });

  }));

  it('should exist', function() {
    expect(controller).toBeDefined();
  });

  describe('initialization', function() {
    it('should set the heading text', function() {
      expect(scope.heading).toEqual('Hello World!');
    });
  });

});