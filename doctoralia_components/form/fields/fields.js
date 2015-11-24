(function(){
  "use strict";

  angular.module('draliaComponents')

  //field input
  .directive('draliaInputField', ['$compile',function($compile){
    return {
      scope: {field: '=', id: '=',form: '='},
      templateUrl: 'doctoralia_components/form/fields/input.html',
      replace: true,
      link: function(scope, elem, attrs) {

        //Adding field validations
        angular.forEach(scope.field.validations, function(validation, key) {
          var dralia_validation_element = document.createElement('dralia-' + validation.type + '-validation');
          dralia_validation_element.setAttribute('form', 'form');
          elem.append($compile(dralia_validation_element)(scope));
      });
      },
      controller: function(){}
    }
  }])

  //field checkbox
  .directive('draliaCheckboxField', function(){
    return {
      scope: {field: '=', id: '='},
      templateUrl: 'doctoralia_components/form/fields/checkbox.html',
      replace: true,
      controller: function(){}
    }
  })

  //field select
  .directive('draliaSelectField', function(){
    return {
      scope: {field: '=', id: '='},
      templateUrl: 'doctoralia_components/form/fields/select.html',
      replace: true,
      controller: function(){},
      link: function(scope){
        if(!angular.isDefined(scope.field.options.id))
          scope.field.options.id = function(item){return item};
        if(!angular.isDefined(scope.field.options.label))
          scope.field.options.label = function(item){return item};
      }
    }
  });
})();
