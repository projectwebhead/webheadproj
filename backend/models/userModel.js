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
  h1: {
    type: Number,
    default: 0,
  },
  h2: {
    type: Number,
    default: 0,
  },
  h3: {
    type: Number,
    default: 0,
  },
  h4: {
    type: Number,
    default: 0,
  },
  h5: {
    type: Number,
    default: 0,
  },
  h6: {
    type: Number,
    default: 0,
  },
  h7: {
    type: Number,
    default: 0,
  },
  c1: {
    type: Number,
    default: 0,
  },
  c2: {
    type: Number,
    default: 0,
  },
  c3: {
    type: Number,
    default: 0,
  },
  c4: {
    type: Number,
    default: 0,
  },
  f1: {
    type: Number,
    default: 0,
  },
  f2: {
    type: Number,
    default: 0,
  },
  f3: {
    type: Number,
    default: 0,
  },
  f4: {
    type: Number,
    default: 0,
  },
  j1: {
    type: Number,
    default: 0,
  },
  j2: {
    type: Number,
    default: 0,
  },
  j3: {
    type: Number,
    default: 0,
  },
  j4: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
