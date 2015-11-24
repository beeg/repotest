(function(){
  "use strict";

  angular.module('draliaComponents')

  //field input
  .directive('draliaRequiredValidation', function(){
    return {
      scope: {form:'='},
      templateUrl: 'doctoralia_components/form/validations/required.html',
      replace: true,
      controller: function(){}
    }
  })
;
})();
