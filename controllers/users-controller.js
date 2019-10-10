const { selectUser } = require('../models/users-models');

exports.getUsers = (req, res, next) => {
  const { username } = req.params;
  selectUser(username)
    .then(([user]) => {
      res.status(200).send({ user });
    })
    .catch(next);
};