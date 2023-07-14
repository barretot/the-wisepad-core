const Password = ({
  invalidPasswordError,
  left,
  right,
}) => {
  const noNumberIn = (password) => !(/\d/.test(password));

  const tooShort = (password) => password.length < 6;

  const valid = (password) => {
    if (!password) return false;

    if (noNumberIn(password) || tooShort(password)) return false;

    return true;
  };

  const create = (password) => {
    if (valid(password)) {
      return right(password);
    }

    return left(invalidPasswordError());
  };

  return Object.freeze({
    create,
  });
};

module.exports = Password;
