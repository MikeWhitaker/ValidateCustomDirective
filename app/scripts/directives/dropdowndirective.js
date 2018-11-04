"use strict";

/**
 * @ngdoc directive
 * @name formValidateDirectiveApp.directive:dropdown
 * @description
 * # dropdown
 */
angular.module("formValidateDirectiveApp").directive("dropdown", function() {
  return {
    require: ["dropdown", "ngModel"],
    restrict: "E",
    scope: {
    },
    controller: function($scope, $attrs) {
      var vm = this;
      var ngModel;
      
      vm.init = function (ngModelController) {
        ngModel = ngModelController;
        $scope.modelValue = ngModel;
      };


      $scope.requiredParamExists = $attrs.hasOwnProperty( 'requireValidation' );
    },
    link: function(scope, element, attributes, controllers){
      var dropDownController = controllers[0];
      var ngModelController = controllers[1];
      dropDownController.init(ngModelController)
    },
    controllerAs: "dropdownCtrl",
    templateUrl: "/scripts/directives/dropdown.html"
  };
});
