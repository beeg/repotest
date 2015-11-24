describe('angularjs homepage', function() {

  it('should greet the named user', function() {
    browser.get('http://one.local/#/');

    expect(browser.getTitle()).toEqual('Doctoralia One Web App');

  });
  
});
