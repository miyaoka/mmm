'use strict';

var _ = require('lodash');
var PersonName = require('./person_name.model');
var dump = require('./person_names.json');

// Get list of person_names
exports.index = function(req, res) {
  PersonName.find(function (err, person_names) {
    if(err) { return handleError(res, err); }
    return res.json(200, person_names);
  });
};

exports.dump = function(req, res) {
  return res.json(200, dump);
};
exports.random = function(req, res) {
  var q = req.query;
  var names = dump[q.nametype];

  if(!names){
    return res.json(400, {'error': 'nametype required'});
  }

  if(!!q.lang){
    names = names[q.lang];
  } else {
    var allnames = [];
    for(var lang in names){
      allnames = allnames.concat(names[lang]);
    }
    names = allnames;
  }
//  console.log('nameslen', names.length, names);
  return res.json(200, names[ Math.floor(Math.random()* names.length) ]);
};

// Get a single person_name
exports.show = function(req, res) {
  PersonName.findById(req.params.id, function (err, person_name) {
    if(err) { return handleError(res, err); }
    if(!person_name) { return res.send(404); }
    return res.json(person_name);
  });
};

// Creates a new person_name in the DB.
exports.create = function(req, res) {
  PersonName.create(req.body, function(err, person_name) {
    if(err) { return handleError(res, err); }
    return res.json(201, person_name);
  });
};

// Updates an existing person_name in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  PersonName.findById(req.params.id, function (err, person_name) {
    if (err) { return handleError(err); }
    if(!person_name) { return res.send(404); }
    var updated = _.merge(person_name, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, person_name);
    });
  });
};

// Deletes a person_name from the DB.
exports.destroy = function(req, res) {
  PersonName.findById(req.params.id, function (err, person_name) {
    if(err) { return handleError(res, err); }
    if(!person_name) { return res.send(404); }
    person_name.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}