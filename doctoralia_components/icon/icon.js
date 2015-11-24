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
