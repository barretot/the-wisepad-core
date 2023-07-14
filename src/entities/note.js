const Note = ({
  Title,
  left,
  right,
}) => {
  const create = (owner, title, content) => {
    const titleOrError = Title.create(title);

    if (titleOrError.isLeft()) {
      return left(titleOrError.value);
    }
    return right(owner, titleOrError.value, !content ? '' : content);
  };

  return Object.freeze({
    create,
  });
};

module.exports = Note;
