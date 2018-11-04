"use strict";

/**
 * @ngdoc directive
 * @name formValidateDirectiveApp.directive:dropdown
 * @description
 * # dropdown
 */
angular.module("formValidateDirectiveApp").directive("dropdown", function() {
  return {
    restrict: "E",
    controller: function($scope, $attrs) {
      $scope.requiredParamExists = $attrs.hasOwnProperty( 'requiredparam' );
    },
    templateUrl: "/scripts/directives/dropdown.html"
  };
});
