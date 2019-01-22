const User = require('../models/user.model');

exports.test = (req, res) => {
  res.status(200).send('greeting');
};

exports.user_create = (req, res, next) => {
  let user = new User({
    name           : req.body.name,
    provider       : req.body.provider,
    adventurer     : req.body.adventurer,
    corporate      : req.body.corporate,
    bohemian       : req.body.bohemian,
    creative       : req.body.creative,
    socialite      : req.body.socialite,
    activist       : req.body.activist,
    academic       : req.body.academic,
    technician     : req.body.technician,
    naturelover    : req.body.naturelover,
    gurusabound    : req.body.gurusabound,
    fitnessfocused : req.body.fitnessfocused,
    systemsavvy    : req.body.systemsavvy,
    spiritual      : req.body.spiritual,
    groupie        : req.body.groupie
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
