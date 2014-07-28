'use strict';

angular.module('mmmApp')
  .factory('Game', function (PersonNames, Workers, Worker) {

    var addWorker = function(age, count){
      var langs = 'en de fr it es ja'.split(' ');
      var workers = [];
      for(var i = 0; i < count; i++){
        var lang = langs[Math.floor(Math.random()*langs.length)];
        var lang2 = langs[Math.floor(Math.random()*langs.length)];
//          lang = lang2 = 'ja';
        var gender = PersonNames.genders[Math.floor(Math.random()*2)];
        var familyName = PersonNames.getName('family');
        var firstName = PersonNames.getName(gender, lang2);

        var w = new Worker(age);
        w.firstName = firstName;
        w.familyName = familyName;
        w.gender = gender;
        Workers.add(w);
      }
    }

    // Public API here
    return {
      init: function (){
        console.log('initgame');
        PersonNames.load().then(function(){
          addWorker(0, 10);
        });

      },
      nextMonth: function(){

      }
    };
  });
