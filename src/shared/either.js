class Left {
  constructor(value) {
    this.value = value;
  }

  isLeft() {
    return true;
  }

  isRight() {
    return false;
  }
}

class Right {
  constructor(value) {
    this.value = value;
  }

  isLeft() {
    return false;
  }

  isRight() {
    return true;
  }
}

class Either {
  constructor(value) {
    this.value = value;
  }
}

function left(l) {
  return new Left(l);
}

function right(a) {
  return new Right(a);
}

module.exports = {
  Left,
  Right,
  Either,
  left,
  right,
};

