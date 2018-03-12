'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var MentorSchema = new mongoose.Schema({
  Name: String,
  Experience: String,
  Experties: String,
  title : String
  
  
});
MentorSchema.pre('find', function(next){
  this.populate('Mentor', 'name');
  this.populate('Mentor.Experience', 'name');
  this.populate('Mentor.Experties', 'name');
  this.populate('Mentor.title', 'name');
  next();
});
MentorSchema.pre('find', function(next){
  this.populate('Mentor', 'name');
  this.populate('Mentor.Experience', 'name');
  this.populate('Mentor.Experties', 'name');
  this.populate('Mentor.title', 'name');
  next();
});

MentorSchema.index({
  'Name': 'text',
  'Experience': 'text',
  'Experties': 'text',
  'title': 'text',

}, {name: 'Mentor_schema_index'});

var TinySegmenter = require('tiny-segmenter');

var getSearchText = function(Mentor){
  var tinySegmenter = new TinySegmenter();
  var searchText = "";
  searchText += tinySegmenter.segment(Mentor.Name).join(' ') + " ";
  searchText += tinySegmenter.segment(Mentor.Experience).join(' ') + " ";
  
  };