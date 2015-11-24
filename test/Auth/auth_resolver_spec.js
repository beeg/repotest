describe('AuthResolver', function () {

  beforeEach(module('draliaAuth'));

  var user_is_authenticated = false;

  beforeEach(function(){

    inject( function(_AuthResolver_, _AuthService_, _$location_, _$rootScope_, $q){
      authResolver = _AuthResolver_;
      authService = _AuthService_;
      $location = _$location_;
      $rootScope = _$rootScope_;

      authService.isAuthenticated = function(){ return user_is_authenticated; };

      spyOn($location, 'url');

    });

  });

  it('redirects to /login if not authenticated', function(){

    authResolver.resolve().finally(function() {
      expect($location.url).toHaveBeenCalled();
    });

    $rootScope.$digest(); //to execute promises

  });

  it('not redirects to /login if authenticated', function(){

    user_is_authenticated = true;

    authResolver.resolve().finally(function() {
      expect($location.url).not.toHaveBeenCalled();
    });

    $rootScope.$digest(); //to execute promises

  });

});
