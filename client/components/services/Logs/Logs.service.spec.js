'use strict';

describe('Service: Logs', function () {

  // load the service's module
  beforeEach(module('mmmApp'));

  // instantiate service
  var Logs;
  beforeEach(inject(function (_Logs_) {
    Logs = _Logs_;
  }));

  it('should do something', function () {
    expect(!!Logs).toBe(true);
  });

});
