'use strict';

const User = require('../models/userModel');

exports.getUser = async (req, res) => {
  try {
    const data = await User.find({});

    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ username, password });

    if (user != null) {
      res.status(200).json({
        status: 'success',
        message: 'Logged in successfully',
        data: user,
      });
    } else {
      res.json({
        status: 'fail',
        message: 'Wrong username or password',
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      error: err.message,
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Successfully signed up!',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    const { errors, message } = err;

    res.json({
      status: 'fail',
      message: message.includes('E11000')
        ? 'Username is already taken'
        : message,
    });
  }
};
