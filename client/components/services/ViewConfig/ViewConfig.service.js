'use strict';

angular.module('mmmApp')
  .factory('ViewConfig', function () {
    return {
      showRuby: true,
      showFirstName: false,
      showFamilyName: true,
      invertFirstName: true,
      invertFamilyName: true
    };
  });
