'use strict';

var express = require('express');
var controller = require('./mentor.controller');

var router = express.Router();


router.get('/mentors', controller.show);
router.post('/mentor/add', auth.isAuthenticated(), controller.create);

module.exports = router;
