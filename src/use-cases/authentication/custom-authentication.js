const { UserNotFoundError, WrongPasswordError } = require('./errors');

function CustomAuthentication(userRepository, encoder, tokenManager) {
  async function auth(authenticationParams) {
    const user = await userRepository.findByEmail(authenticationParams.email);
    if (!user) {
      return left(new UserNotFoundError());
    }

    const matches = await encoder.compare(
      authenticationParams.password,
      user.password,
    );
    if (!matches) {
      return left(new WrongPasswordError());
    }

    const accessToken = await tokenManager.sign({ id: user.id });

    return right({
      accessToken,
      id: user.id,
    });
  }

  return { auth };
}

module.exports = CustomAuthentication;
