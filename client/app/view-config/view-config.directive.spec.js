'use strict';

describe('Directive: viewConfig', function () {

  // load the directive's module and view
  beforeEach(module('mmmApp'));
  beforeEach(module('app/view-config/view-config.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<view-config></view-config>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the viewConfig directive');
  }));
});