'use strict';

describe('Filter: hexcolor', function () {

  // load the filter's module
  beforeEach(module('mmmApp'));

  // initialize a new instance of the filter before each test
  var hexcolor;
  beforeEach(inject(function ($filter) {
    hexcolor = $filter('hexcolor');
  }));

  it('should return the input prefixed with "hexcolor filter:"', function () {
    var text = 'angularjs';
    expect(hexcolor(text)).toBe('hexcolor filter: ' + text);
  });

});
