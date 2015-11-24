

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
