'use strict';

describe('Controller: WorkersCtrl', function () {

  // load the controller's module
  beforeEach(module('mmmApp'));

  var WorkersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkersCtrl = $controller('WorkersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
