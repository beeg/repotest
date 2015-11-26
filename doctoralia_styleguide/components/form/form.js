(function(){
  "use strict";

  //create module
  angular.module('draliaStyleguide')

  .controller('FormCtrl', ['$scope',
	 function ($scope) {

	 	var calendarList = [
        {
          name: 'Personal calendar',
        },
        {
          name: 'Film premieres'
        }
      ];
 
	    $scope.form = {
	        fields: {
	          username:{
	          	label: 'Correo electrónico',
	            type: 'text',
	            placeholder: 'Correo electrónico',
	            value: null
	          },   
	          password:{
	            type: 'password',
	            placeholder: 'Contraseña',
	            value: null
	          },
	          password:{
	            type: 'text',
	            placeholder: 'Nombre',
	            value: null
	          },
	          select:{
	            type: 'select',
	            label: 'Calendario',
	            value: null,
	            options: {
	               data: calendarList,
	               label: function(c){return c.name},
	               id:function(c){return c.name},
	            }
	          },
	          checkbox:{
	          	type: 'checkbox',
	          	label: 'Acepto Términos y Condiciones',
	          	value: null
	          }
	        },
	        buttons: {
	          send:{
	            text: 'Entrar',
	            action: function () {
	                console.log('Button clicked')
	            }
	          },
	          cancel:{
	            text: 'Cancelar',
	            action: function () {
	                console.log('Button clicked')
	            }
	          }
	        }
	    };


	}]);
  
})();