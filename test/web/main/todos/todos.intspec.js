describe('todos page', function() {
  beforeEach(function() {
    isAngularSite(true);
  });

  beforeEach(function() {
    browser.get(baseUrl());
  });

  it('should default to the todos page', function() {
    element.all(by.repeater('todo in todos'))
      .then(function(todoEls) {
        expect(todoEls.length).toEqual(5);
      });
  });
});