"use strict";
function removeClick() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.on("click", () => {
        $element.unbind("click");
        
      });
    }
  };
}

angular.module("app").directive("removeClick", removeClick);

