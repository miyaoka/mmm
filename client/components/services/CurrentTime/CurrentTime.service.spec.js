'use strict';

describe('Service: CurrentTime', function () {

  // load the service's module
  beforeEach(module('mmmApp'));

  // instantiate service
  var CurrentTime;
  beforeEach(inject(function (_CurrentTime_) {
    CurrentTime = _CurrentTime_;
  }));

  it('should do something', function () {
    expect(!!CurrentTime).toBe(true);
  });

});
