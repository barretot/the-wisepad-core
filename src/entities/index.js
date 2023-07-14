const { left, right } = require('../shared');
const { invalidEmailError, invalidPasswordError, invalidTitleError } = require('./errors');
const { valid } = require('./email-validator');
const { Email } = require('./email');
const Password = require('./password');
const User = require('./user');
const Note = require('./note');
const Title = require('./title');

const makeUser = User({
  left,
  right,
  invalidEmailError,
  invalidPasswordError,
  Email,
  Password,
});

const makeEmail = Email({
  left,
  right,
  invalidEmailError,
  valid,
});

const makePassword = Password({
  invalidPasswordError,
  left,
  right,
});

const makeNote = Note({
  Title,
  left,
  right,
});

const makeTitle = Title({
  right,
  left,
  invalidTitleError,
});

module.exports = {
  makeUser,
  makeEmail,
  makePassword,

  makeNote,
  makeTitle,
};
