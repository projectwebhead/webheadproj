'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 0,
  },
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
  },
  progress: {
    type: Object,
    default: {
      course: {
        h1: { default: 0 },
        h2: { default: 0 },
        h3: { default: 0 },
        h4: { default: 0 },
        h5: { default: 0 },
        h6: { default: 0 },
        h7: { default: 0 },
        c1: { default: 0 },
        c2: { default: 0 },
        c3: { default: 0 },
        c4: { default: 0 },
        f1: { default: 0 },
        f2: { default: 0 },
        f3: { default: 0 },
        f4: { default: 0 },
        j1: { default: 0 },
        j2: { default: 0 },
        j3: { default: 0 },
        j4: { default: 0 },
      },
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
