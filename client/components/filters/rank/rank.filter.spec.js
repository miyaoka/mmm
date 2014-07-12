'use strict';

describe('Filter: rank', function () {

  // load the filter's module
  beforeEach(module('mmmApp'));

  // initialize a new instance of the filter before each test
  var rank;
  beforeEach(inject(function ($filter) {
    rank = $filter('rank');
  }));

  it('should return the input prefixed with "rank filter:"', function () {
    var text = 'angularjs';
    expect(rank(text)).toBe('rank filter: ' + text);
  });

});
