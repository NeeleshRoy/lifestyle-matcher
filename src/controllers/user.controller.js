const User = require('../models/user.model');
const cosine_similarity = require('compute-cosine-similarity');

exports.test = (req, res) => {
  res.status(200).send('greeting');
};

exports.user_create = (req, res, next) => {
  let user = new User({
    name             : req.body.name,
    lifestyle_scores : [
      req.body.provider,
      req.body.adventurer,
      req.body.corporate,
      req.body.bohemian,
      req.body.creative,
      req.body.socialite,
      req.body.activist,
      req.body.academic,
      req.body.technician,
      req.body.naturelover,
      req.body.gurusabound,
      req.body.fitnessfocused,
      req.body.systemsavvy,
      req.body.spiritual,
      req.body.groupie
    ]
  });

  user.save((err, user) => {
    if (err) {
      return next(err);
    }
    res.status(200).send({ user_id: user._id, status: 'success' });
  });
};

exports.user_details = (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(user);
  });
};

exports.user_update = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err) return next(err);
    res.status(200).send({ user, status: 'success' });
  });
};

exports.user_delete = (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) return next(err);
    res.status(200).send({ status: 'success' });
  });
};

exports.similar_users = (req, res, next) => {
  User.findById(req.params.id, (err, baseUser) => {
    if (err) {
      return next(err);
    }
    console.log(baseUser);
    User.find((err, users) => {
      if (err) return next(err);
      //const similarities = []
      console.log('cosine_similarity');
      users.forEach((user) => {
        console.log(
          baseUser.name + ' and ' + user.name + ' - ',
          (cosine_similarity(baseUser.lifestyle_scores, user.lifestyle_scores) * 100).toFixed(2) + '%'
        );
      });
      res.status(200).send(users);
    });
  });
};
