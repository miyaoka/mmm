'use strict';

describe('Service: PersonNames', function () {

  // load the service's module
  beforeEach(module('mmmApp'));

  // instantiate service
  var PersonNames;
  beforeEach(inject(function (_PersonNames_) {
    PersonNames = _PersonNames_;
  }));

  it('should do something', function () {
    expect(!!PersonNames).toBe(true);
  });

});
