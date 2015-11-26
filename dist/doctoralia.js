(function(){
  "use strict";

  //create module
  angular.module('draliaComponents', []);  
})();

(function(){
  "use strict";

  angular.module('draliaComponents').directive('draliaButton', function(){
    return {
      scope: {button:'='},
      templateUrl: 'doctoralia_components/button/button.html',
      replace: true,
      controller: function(){}
    } 
  });
})();

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

(function(){
  "use strict";

  angular.module('draliaComponents').directive('draliaForm', ['$compile', function($compile){
    return {
      scope: {submit: '&', config:'='},
      templateUrl: 'doctoralia_components/form/form.html',
      replace: true,
      link: function(scope, elem, attrs) {
        
        var dralia_field;
        var directive_name;
        var text_directive = ['text', 'password', 'email', 'date']; //all these types load dralia-text-field

        var compiledFields = [];
        angular.forEach(scope.config.fields, function(field, key) {

          if(text_directive.indexOf(field.type) >= 0){
            directive_name = 'input';
          }else{
            directive_name = field.type;
          }

          // Create an element of the correct type
          dralia_field = document.createElement('dralia-' + directive_name + '-field');
          dralia_field.setAttribute('id', key);
          dralia_field.setAttribute('field', 'config.fields.'+key);
          dralia_field.setAttribute('form', 'config.name');

          // Compile the element
          compiledFields.unshift($compile(dralia_field)(scope));
      });

      angular.forEach(compiledFields,function(field){
          elem.prepend(field);
      });

      },
      controller: function(){}
    }
  }]);
})();

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

(function(){
  "use strict";

  angular.module('draliaComponents').directive('draliaIcon', function(){
    return {
      scope: {viewbox:'='},
      templateUrl: 'doctoralia_components/icon/icon.html',
      replace: true,
      controller: function(){}
    }
  });
})();



(function(){
  "use strict";
  //to prevent Error: Invalid value for <svg> attribute viewBox="{{viewport}}" before angularjs loading (something like ng-src)

  angular.module('draliaComponents').directive('vbo', function() {
    return {
      link: function(scope, element, attrs) {
        attrs.$observe('vbo', function(value) {
          element.attr('viewBox', value);
        })
      }
    };
  });


})();
