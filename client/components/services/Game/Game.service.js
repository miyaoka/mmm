'use strict';

angular.module('mmmApp')
  .factory('Game', function ($state, PersonNames, Workers, Worker, CurrentTime, Logs, Log) {

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
          addWorker(16, 100);
        });

      },
      nextMonth: function(){
        var ws = Workers.list;

        ws.forEach(function(w){
          if(!w.isAlive){
            return;
          }
          if(Math.random() < .05){
            w.isAlive = false;
            Logs.push(new Log(
              ['[', w.id, '] ', w.firstName.kana, ' ', w.familyName.kana, ' is dead.'].join('')
            ));
          }
        });

        CurrentTime.nextMonth();

        if(CurrentTime.getMonth() == 0){
          Workers.clearDead();
          addWorker(16,100)
        }

      }
    };
  });
