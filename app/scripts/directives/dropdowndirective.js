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
    scope: {
      customModel: '=ngModel',
    },
    controller: function($scope, $attrs) {
      var vm = this;
      
      $scope.requiredParamExists = $attrs.hasOwnProperty( 'requireValidation' );
      $scope.getCustomModel = function (){
        return $scope.customModel;
      }
    },
    link: function(scope, element, attributes, controllers){
      // var dropDownController = controllers[0];
      // var ngModelController = controllers[1];
      // dropDownController.init(ngModelController)
    },
    controllerAs: "dropdownCtrl",
    templateUrl: "/scripts/directives/dropdown.html"
  };
});
