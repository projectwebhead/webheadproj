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

exports.markAsDone = async (req, res) => {
  try {
    const { course } = req.body;
    const ID = { _id: req.body.id };
    console.log(course);
    console.log(ID);

    const mark = await User.findOneAndUpdate(ID, course, {
      new: true,
      runValidators: true,
    });

    if (mark != null) {
      res.status(200).json({
        status: 'success',
        message: 'Marked as done!',
        data: mark,
      });
    } else {
      res.json({
        status: 'fail',
        message: 'Unable to mark mark as done!',
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      error: err.message,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const _id = req.body._id[0].id;

    const user = await User.findById(_id);

    if (user != null) {
      res.status(200).json({
        status: 'success',
        message: 'User ID successfully retrieved',
        data: user,
      });
    } else {
      res.json({
        status: 'fail',
        message: 'Invalid User ID',
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      error: err.message,
    });
  }
};
