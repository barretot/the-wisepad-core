const encoder = {
  encode: (plain) => Promise.resolve(plain),
  compare: (plain, hashed) => Promise.resolve(plain === hashed),
};

module.exports = encoder;
