// create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var User = require('../models/user');
var Post = require('../models/post');

// GET /comments
// Get all comments
router.get('/', function(req, res, next) {
  Comment.find().populate('author').exec(function(err, comments) {
    if (err) { return next(err); }
    res.json(comments);
  });
});

// POST /comments
// Create a comment
router.post('/', function(req, res, next) {
  var comment = new Comment({
    body: req.body.body });
});

