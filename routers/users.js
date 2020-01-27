const express = require('express');
const router = express.Router();

//@route    POST api/users
//@desc     Register a user
//@access   Public
router.post('/', (req, res) => {
  res.send('Register a user!');
});

module.exports = router; //must export router or it won't work

//the '/' now refers to api/users
