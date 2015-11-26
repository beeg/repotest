(function(){
  "use strict";

  //create module
  angular.module('draliaStyleguide', ['ngRoute', 'draliaComponents'])
  .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/form', {
            templateUrl: 'doctoralia_styleguide/components/form/form.html',
            controller: 'FormCtrl'
        })
        .when('/button', {
            templateUrl: 'doctoralia_styleguide/components/button/button.html',
            controller: 'ButtonCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  }]) 

  .controller('ComponentsCtrl', ['$scope', '$location',
	 function ($scope, $location) {

	 	$scope.components = [
	 		{
	 			component : 'form',
	 			path : '/form'
	 		},
	 		{
	 			component : 'button',
	 			path : '/button'
	 		}
	 	];

 		$scope.goTo = function(path)	{
 			$location.url(path);
 		};


	}]);
  
})();
