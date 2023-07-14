const User = ({
  left,
  right,
  invalidEmailError,
  invalidPasswordError,
  Email,
  Password,
}) => {
  const create = (email, password) => {
    const emailOrError = Email.create(email);

    if (emailOrError.isLeft()) {
      return left(invalidEmailError(email));
    }

    const passwordOrError = Password.create(password);
    if (passwordOrError.isLeft()) {
      return left(invalidPasswordError());
    }

    const emailObject = emailOrError.value;
    const passwordObject = passwordOrError.value;

    return right(emailObject, passwordObject);
  };

  return Object.freeze({
    create,
  });
};

module.exports = User;
