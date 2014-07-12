'use strict';

describe('Service: ViewConfig', function () {

  // load the service's module
  beforeEach(module('mmmApp'));

  // instantiate service
  var ViewConfig;
  beforeEach(inject(function (_ViewConfig_) {
    ViewConfig = _ViewConfig_;
  }));

  it('should do something', function () {
    expect(!!ViewConfig).toBe(true);
  });

});
