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
