describe('angularjs homepage todo list', function() {

  let expectedMsg = 'My First Angular 2 App - Update';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });
});
