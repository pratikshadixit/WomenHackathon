'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProblemSchema = new mongoose.Schema({
  title: String,
  content: String,
  answers: [{
    content: String,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    comments: [{
      content: String,
      stars: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }],
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
    }],
    stars: [{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }],
  }],
  tags: [{
    text: String,
  }],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [{
    content: String,
    stars: [{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  }],
  stars: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }],
  searchText: String,
});
ProblemSchema.pre('find', function(next){
  this.populate('user', 'name');
  this.populate('comments.user', 'name');
  this.populate('answers.user', 'name');
  this.populate('answers.comments.user', 'name');
  next();
});
ProblemSchema.pre('findOne', function(next){
  this.populate('user', 'name');
  this.populate('comments.user', 'name');
  this.populate('answers.user', 'name');
  this.populate('answers.comments.user', 'name');
  next();
});

ProblemSchema.index({
  'title': 'text',
  'content': 'text',
  'tags.text': 'text',
  'answers.content': 'text',
  'comments.content': 'text',
  'answers.comments.content': 'text',
  'searchText': 'text',
}, {name: 'Problem_schema_index'});

var TinySegmenter = require('tiny-segmenter');

var getSearchText = function(Problem){
  var tinySegmenter = new TinySegmenter();
  var searchText = "";
  searchText += tinySegmenter.segment(Problem.title).join(' ') + " ";
  searchText += tinySegmenter.segment(Problem.content).join(' ') + " ";
  Problem.answers.forEach(function(answer){
    searchText += tinySegmenter.segment(answer.content).join(' ') + " ";
    answer.comments.forEach(function(comment){
      searchText += tinySegmenter.segment(comment.content).join(' ') + " ";
    });
  });