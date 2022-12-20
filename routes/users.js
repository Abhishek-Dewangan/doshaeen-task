const User = require('../modules/user');
const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.find({_id: req.params.id});
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
