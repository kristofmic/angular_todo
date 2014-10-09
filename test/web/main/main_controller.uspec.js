describe('mainController', function() {

  var
    controller;

  beforeEach(module('ch.Main'));

  beforeEach(inject(function($rootScope, $controller) {
    controller = $controller('mainController', {
      $scope: $rootScope.$new()
    });

  }));

  it('should exist', function() {
    expect(controller).toBeDefined();
  });

});