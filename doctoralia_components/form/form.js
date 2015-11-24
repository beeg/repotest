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
