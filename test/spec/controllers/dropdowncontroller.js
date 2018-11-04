'use strict';

describe('Controller: DropdowncontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('formValidateDirectiveApp'));

  var DropdowncontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DropdowncontrollerCtrl = $controller('DropdowncontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DropdowncontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
