const UserRepository = {
  findAll: () => Promise.resolve([]),
  findByEmail: (email) => Promise.resolve(email),
  add: (userData) => Promise.resolve(userData),
};

module.exports = UserRepository;

