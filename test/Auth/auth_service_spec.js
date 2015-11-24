describe('AuthService', function () {

  beforeEach(module('draliaAuth'));

  var login_should_succeed = true;

  beforeEach(function(){

    inject( function(_AuthService_, _ApiService_, _$location_, _$rootScope_, $q, _$cookies_){
      authService = _AuthService_;
      apiService = _ApiService_;
      $location = _$location_;
      $rootScope = _$rootScope_;
      $cookies = _$cookies_;

      //Spy ApiService.post()
      spyOn(apiService, 'post').and.callFake(function(){
        var deferred = $q.defer();
        if(login_should_succeed){
          deferred.resolve({ data: { token_type: 'bearer', access_token: 'xxx'} });
        }else{
          deferred.reject('the_error');
        }

        return deferred.promise;
      });

      //Spy $location.url()
      spyOn($location, 'url');

      //Spy $cookies.get()
      spyOn($cookies, 'get').and.callFake(function(){
        return null;
      });
    });

  });


  describe('success login', function () {

    it('is authenticated', function(){

      authService.login('user', 'pass').finally(function() {
        expect(authService.isAuthenticated()).toBe(true);
      });

      $rootScope.$digest(); //to execute promises

    });

    it('sets token', function () {

      authService.login('user', 'pass').then(function() {
        expect(authService.getToken()).toEqual('bearer xxx');
      });

      $rootScope.$digest(); //to execute promises

    });

    it('redirects to requested page', function(){

      authService.setRequestedRoute('requested/route');

      authService.login('user', 'pass').then(function() {
        expect($location.url).toHaveBeenCalledWith('requested/route');
      });

      $rootScope.$digest(); //to execute promises

    });

  });


  describe('failed login', function () {

    it('is not authenticated', function(){

      login_should_succeed = false;

      authService.login('user', 'pass').finally(function() {
        expect(authService.isAuthenticated()).toBe(false);
      });

      $rootScope.$digest(); //to execute promises

    });
  });


});
