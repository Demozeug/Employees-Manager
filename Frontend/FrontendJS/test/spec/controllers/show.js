'use strict';

describe('Controller: ShowctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('employeesJsApp'));

  var ShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowCtrl = $controller('ShowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShowCtrl).toBeDefined();
  });
});
