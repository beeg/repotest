(function(){
  "use strict";

  //create module
  angular.module('draliaStyleguide')

  .controller('ButtonCtrl', ['$scope',
	 function ($scope) {
 
	 $scope.button = {
	 	text: 'Entrar',
	 	type: 'secondary',
	 	action: function () {
            console.log('Button clicked');
        }
	 };


	}]);
  
})();