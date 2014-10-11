describe('todos app', function() {
  beforeEach(function() {
    isAngularSite(true);
  });

  beforeEach(function() {
    browser.get(baseUrl());
  });

  it('should default to the todo page', function() {
    expect(browser.getCurrentUrl()).toContain('/todos');
  });

  describe('nav', function() {
    it('should set the To Do\'s nav to active', function() {
      expect(element(by.css('.active > a')).getText()).toEqual('To Do\'s');
    });

    it('should take me to the archived view', function() {
      element.all(by.css('.nav > li > a'))
        .then(function(anchors) {
          expect(anchors.length).toEqual(2);
          return anchors[1].click();
        })
        .then(function() {
          expect(browser.getCurrentUrl()).toContain('/archive');
        });
    });
  });
});