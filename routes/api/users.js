const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route  POST api/users
// @desc   Test route
// @access Public
router.post(
  '/',
  [check('name', 'Name is required').not().isEmpty(), check('email', 'Please use a valid email').isEmail(), check('password', 'Please enter password with 6 or more xters').isLength({ min: 6 })],
  (req, res) => {
    //console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('Users route...');
  }
);

module.exports = router;
