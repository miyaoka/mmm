'use strict';

angular.module('mmmApp')
  .factory('Skill', function (Workers) {

    //private static var
    var peakAgeMean = 25;
    var peakAgeSd = 2.5;

    var peakDurationMean = 6;
    var peakDurationSd = 2;

    var powerMean = .5;
    var powerSd = .10;

    var ageStart = 10;
    var ageEnd = 40;

    //constructor
    function Skill(parentId){
      this.parentId = parentId;

      this.peakStart = nrMinMax(peakAgeMean, peakAgeSd, 10);
      this.peakDuration = normRand() * peakDurationSd + peakDurationMean;
      if(0 > this.peakDuration){
        this.peakDuration = 0;
      }
      this.peakEnd = this.peakStart + this.peakDuration;
      this.power = nrMinMax(powerMean, powerSd, .1, 1);

    };
    //private function
    function nrMinMax(mu, sigma, min, max){
      var r = normRand() * sigma + mu;
      if(min > r){
        r = min;
      }
      if(max < r){
        r = max;
      }
      return r;
    }
    function normRand() {
      var x1, x2, rad;

      do {
        x1 = 2 * Math.random() - 1;
        x2 = 2 * Math.random() - 1;
        rad = x1 * x1 + x2 * x2;
      } while(rad >= 1 || rad == 0);

      var c = Math.sqrt(-2 * Math.log(rad) / rad);

      return x1 * c;
    };
    // Define the "instance" methods using the prototype
    // and standard prototypal inheritance.
    Skill.prototype = {
      get age(){
        var w = Workers.get(this.parentId);
        return w ? w.age : 0;
      },
      get normProb() {
        var diff = this.currentPower - powerMean;
        var z = Math.abs(diff / powerSd);
        var k, z2, s, s0, Prob;
        var limit = 1 / 1000000000000000;
        if (z>8.4) {
          Prob = 0.5
        } else {
          z2 = z*z;
          s0 = z * Math.exp(-z2 / 2) / Math.sqrt(2 * Math.PI);
          s = s0;
          Prob = s0;
          k = 1;
          while (Math.abs(s / s0) > limit) {
            k += 2;
            s *= z2 / k;
            Prob += s;
          }
        }
        return Prob * ((0 < diff) ? -1 : 1) + 0.5;
      },
      get currentPower(){
        return this.currentRate * this.power;
      },
      get currentRate(){
        var age = this.age;
        var val;
        if(age < 16){//ageStart){
          val = 0;
        } else if(age < this.peakStart){
          val = (age - ageStart) / (this.peakStart - ageStart);
        } else if(age < this.peakEnd){
          val = 1;
        } else if(age < ageEnd){
          val = 1 - (age - this.peakEnd) / (ageEnd - this.peakEnd) / 2;
        } else {
          val = 0;
        }
        return val;
      },
      get potential(){
        var pt;
        if(this.age > this.peakStart){
          pt = 0;
        } else {
          pt = this.power - this.currentPower;
          if(0 > pt){
            pt = 0;
          }
        }
        return pt;
      },
    };

    return Skill;
  });
