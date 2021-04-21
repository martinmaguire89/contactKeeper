const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check'); //<< Lets us control what is entered and validated

const User = require('../models/User');

//@route        POST api/users
// @desc        Register a user
//@access       Public
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(), //<< This is so the filed is no left empty
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'please enater a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('passed');
  }
);

module.exports = router;
