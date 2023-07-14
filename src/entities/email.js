const Email = ({
  left,
  right,
  invalidEmailError,
  valid,
}) => {
  const create = (email) => {
    if (valid(email)) {
      return right(email);
    }

    return left(invalidEmailError(email));
  };

  return Object.freeze({
    create,
  });
};

module.exports = {
  Email,
};
