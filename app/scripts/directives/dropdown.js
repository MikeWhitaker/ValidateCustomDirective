'use strict';

/**
 * @ngdoc directive
 * @name formValidateDirectiveApp.directive:dropdown
 * @description
 * # dropdown
 */
angular.module('formValidateDirectiveApp')
  .directive('dropdown', function () {
    return {
      templateUrl: '/scripts/directives/dropdown.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the dropdown directive');
        // debugger;
      }

    };
  });
