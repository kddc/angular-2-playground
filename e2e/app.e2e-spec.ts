describe('angularjs homepage todo list', function() {

  let expectedMsg = 'Angular 2 Seed';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('#headline')).getText()).toEqual(expectedMsg);
  });
});
