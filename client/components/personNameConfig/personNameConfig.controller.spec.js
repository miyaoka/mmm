'use strict';

describe('Controller: PersonnameconfigCtrl', function () {

  // load the controller's module
  beforeEach(module('mmmApp'));

  var PersonnameconfigCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonnameconfigCtrl = $controller('PersonnameconfigCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
