describe('todo page', function() {
  beforeEach(function() {
    isAngularSite(true);
  });

  beforeEach(function() {
    browser.get(baseUrl());
  });

  it('should default to the todo page', function() {
    expect(browser.getCurrentUrl()).toContain('/todo');
  });

  it('should contain the correct heading', function() {
    expect(element(by.binding('heading')).getText()).toEqual('To Do\'s!');
  });
});