const User = require('../modules/user');
const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.find({_id: req.params.id});
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
