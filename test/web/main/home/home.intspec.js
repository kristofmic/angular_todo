describe('home page', function() {
  beforeEach(function() {
    isAngularSite(true);
  });

  beforeEach(function() {
    browser.get(baseUrl());
  });

  it('should default to the home page', function() {
    expect(browser.getCurrentUrl()).toContain('/home');
  });

  it('should contain the correct heading', function() {
    expect(element(by.binding('heading')).getText()).toEqual('Hello World!');
  });
});