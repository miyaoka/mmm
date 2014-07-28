'use strict';

angular.module('mmmApp')
  .factory('Worker', function (CurrentTime, Skill) {

    //private static var
    var _currentId = 0;

    var ageStart = 10;
    var ageEnd = 40;

    //0-6の人種色
    var skinColors = 'ffffff fcedda fce9c8 e7d091 d7b37d 96673d 874a23'.split(' ');

    function bitCount(i) {
      i = i - ((i >>> 1) & 0x55555555);
      i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
      i = (i + (i >>> 4)) & 0x0f0f0f0f;
      i = i + (i >>> 8);
      i = i + (i >>> 16);
      return i & 0x3f;
    }

    //遺伝子交配
    function crossover(a,b){
      var bins = [a.toString(2), b.toString(2)];
      var bitLen = 6;
      var result = '';
      for(var i = 0; i < bitLen; i++){
        var bin = bins[Math.floor(Math.random()*2)];
        var bi = bin.length - 1 - i;
        result = ((bi < 0) ? '0' : bin[bi]) + result;
      }
      return parseInt(result, 2);
    }
    //6bitの遺伝情報
    function randRaceGen(){
      return Math.floor(Math.random()*64);
    }


    // Define the constructor function.
    function Worker(age){
      var startDate = new Date(CurrentTime.getFullYear() - age, 0, 1);
      var endDate = new Date(CurrentTime.getFullYear() - age + 1, 0, 1);
      this.born = new Date(
        startDate.getTime() +
        ( endDate.getTime() - startDate.getTime() ) * 0 //Math.random()
      );
      this.died = null;
      this.id = _currentId++;

      //人種遺伝子を6bitで定義
      this._raceGen = crossover(randRaceGen(), randRaceGen());


      //private var
      this.skills = [
        new Skill(this.id),
        new Skill(this.id),
        new Skill(this.id),
        new Skill(this.id),
        new Skill(this.id),
      ];

      this.hairColor = Math.random()*0xffffff;
      this.hairSize = Math.ceil(Math.random() * 3 + 3) * 45;
      this.hairRot = Math.floor(Math.random() * (270 - this.hairSize));
      this.eyeColor = 0x333333;//Math.random()*0xffffff;
      this.faceColor = 0xffffff;//0xffeecc;//Math.random()*0xffffff;
      this.faceW = Math.ceil(Math.random()*4) * 5;
      this.faceH = Math.ceil(Math.random()*4) * 5;
//      this.bgColor = Math.random()*0xffffff;
      this.isAlive = true;
    };


    // instance vars, methods
    Worker.prototype = {
      get skinColor(){
        return skinColors[bitCount(this._raceGen)];
      },
      get bgColor(){
        return this.gender == 'male' ? 0x33aaff : 0xff99cc;
      },
      get age(){
//        return CurrentTime.getFullYear() - this.birth.getFullYear();
        return (
          (this.died ? this.died.getTime() : CurrentTime.getTime()) - this.born.getTime()
        ) / 1000 / 86400 / 365;
      },
      set age(num){
        this.skill.age = num;
      },
      get isActive(){
        if(this.age < 16 || this.age >= ageEnd){
          return false;
        }
        return true;
      },
      get salary(){
        var sum = 0;
        this.skills.forEach(function(skill){
          sum += Math.log(skill.normProb);
        });
        return sum* -100;
      }
    };

    return Worker;
  });
