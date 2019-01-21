const User = require('../models/user.model');

exports.test = function (req, res) {
  res.status(200).send('greeting');
};

exports.user_create = function (req, res) {
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

  user.save(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).send('user created successfully');
  });
};

exports.user_details = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return next(err);
    }
    res.status(200).send(user);
  });
};
