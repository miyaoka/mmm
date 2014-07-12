'use strict';

describe('Directive: personName', function () {

  // load the directive's module and view
  beforeEach(module('mmmApp'));
  beforeEach(module('app/person-name/person-name.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<person-name></person-name>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the personName directive');
  }));
});