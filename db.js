const users = require('./data.json')
module.exports = {
  findOne: (query) => {
    return users.find((item) => {
      const { email, password } = query;

      const foundUser = users.find((user, i) => {
        const emailMatched = user.email === email;
        const passwordMatched = user.password === password;

        return user.email === email && user.password === password;
      });

      return foundUser;
    });
  },
};
