'use strict';

var express = require('express');
var controller = require('./question.controller');

var router = express.Router();

var auth = require('../../auth/auth.service');

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);
router.post('/:id/answers', auth.isAuthenticated(), controller.createAnswer);
router.put('/:id/answers/:answerId', auth.isAuthenticated(), controller.updateAnswer);
router.delete('/:id/answers/:answerId', auth.isAuthenticated(), controller.destroyAnswer);

router.post('/:id/comments', auth.isAuthenticated(), controller.createComment);
router.put('/:id/comments/:commentId', auth.isAuthenticated(), controller.updateComment);
router.delete('/:id/comments/:commentId', auth.isAuthenticated(), controller.destroyComment);

router.post('/:id/answers/:answerId/comments', auth.isAuthenticated(), controller.createAnswerComment);
router.put('/:id/answers/:answerId/comments/:commentId', auth.isAuthenticated(), controller.updateAnswerComment);
router.delete('/:id/answers/:answerId/comments/:commentId', auth.isAuthenticated(), controller.destroyAnswerComment);


router.put('/:id/upvote', auth.isAuthenticated(), controller.upvote);
router.delete('/:id/upvote', auth.isAuthenticated(), controller.unupvote);
router.put('/:id/answers/:answerId/upvote', auth.isAuthenticated(), controller.upvoteAnswer);
router.delete('/:id/answers/:answerId/upvote', auth.isAuthenticated(), controller.unupvoteAnswer);
router.put('/:id/comments/:commentId/upvote', auth.isAuthenticated(), controller.upvoteComment);
router.delete('/:id/comments/:commentId/upvote', auth.isAuthenticated(), controller.unupvoteComment);
router.put('/:id/answers/:answerId/comments/:commentId/upvote', auth.isAuthenticated(), controller.upvoteAnswerComment);
router.delete('/:id/answers/:answerId/comments/:commentId/upvote', auth.isAuthenticated(), controller.unupvoteAnswerComment);

module.exports = router;
