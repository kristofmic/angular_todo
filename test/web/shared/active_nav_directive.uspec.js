describe('activeNavDirective', function() {

  var
    stateStub,
    scope,
    isolateScope,
    navElement;

  beforeEach(module('ch.ActiveNav'));

  beforeEach(module(function($provide) {
    stateStub = {
      current: {
        name: 'foobar'
      }
    };

    $provide.value('$state', stateStub);
  }));

  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope.$new();

    navElement = angular.element('<div ch-active-nav="raboof"></div>');

    $compile(navElement)(scope);

    scope.$digest();

    isolateScope = navElement.isolateScope();
  }));

  it('should exist', function() {
    expect(navElement).toBeDefined();
  });

  it('should initialize the targetState to the state passed into the directive', function() {
    expect(isolateScope.targetState).toEqual('raboof');
  });

  describe('handleStateChange()', function() {
    it('should check the current state, not adding the active class to the element if it does not match', function() {
      expect(navElement.hasClass('active')).toBe(false);
    });

    it('should check the new state on the $stateChangeSuccess event, adding the active class to the element if it matches', function() {
      expect(navElement.hasClass('active')).toBe(false);

      scope.$broadcast('$stateChangeSuccess', { name: 'raboof' });

      expect(navElement.hasClass('active')).toBe(true);
    });

    it('should check the new state on the $stateChangeSuccess event, removing the active class to the element if it does not match', function() {
      expect(navElement.hasClass('active')).toBe(false);

      scope.$broadcast('$stateChangeSuccess', { name: 'raboof' });

      expect(navElement.hasClass('active')).toBe(true);

      scope.$broadcast('$stateChangeSuccess', { name: 'foobar' });

      expect(navElement.hasClass('active')).toBe(false);
    });
  });

});