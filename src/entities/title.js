const Title = ({
  right,
  left,
  invalidTitleError,
}) => {
  const emptyOrTooLittle = (title) => !title || title.trim().length < 3;

  const tooLarge = (title) => title.length > 256;

  const valid = (title) => {
    if (emptyOrTooLittle(title) || tooLarge(title)) {
      return false;
    }

    return true;
  };

  const create = (title) => {
    if (valid(title)) {
      return right(title);
    }

    return left(invalidTitleError(title));
  };

  return Object.freeze({
    create,
  });
};

module.exports = Title;
