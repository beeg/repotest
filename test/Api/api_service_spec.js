describe('ApiService', function () {

  var ApiUrl = 'http://www.example.com/api';

  beforeEach(module('draliaApi', function ($provide) {
      $provide.value('ApiUrl', ApiUrl);
  }));


  beforeEach(function(){

    inject( function(_ApiService_, _$httpBackend_){
      apiService = _ApiService_;
      $httpBackend = _$httpBackend_;
    });


  });


  it('does get calls', function(){

    $httpBackend.expectGET(ApiUrl + '/my/path').respond(200);

    apiService.get('my/path');

    $httpBackend.flush();

  });

  it('does post calls', function(){

    $httpBackend.expectPOST(ApiUrl + '/my/path').respond(200);

    apiService.post('my/path');

    $httpBackend.flush();

  });


});
