'use strict';

const express = require('express');
const userController = require('./../Controllers/userController');

const router = express.Router();

router
  .route('/login')
  .post(userController.login)
  .get(userController.getUser);

router.route('/signup').post(userController.signup);

router.route('/save').post(userController.markAsDone);

module.exports = router;
