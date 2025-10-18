const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get current user
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password').populate('followers following', 'username name avatar');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Follow / Unfollow
router.post('/:id/follow', auth, async (req, res) => {
  try {
    const target = await User.findById(req.params.id);
    const me = await User.findById(req.user.id);
    if (!target) return res.status(404).json({ message: 'User not found' });

    const already = target.followers.includes(me.id);
    if (already) {
      target.followers.pull(me.id);
      me.following.pull(target.id);
    } else {
      target.followers.push(me.id);
      me.following.push(target.id);
    }
    await target.save();
    await me.save();
    res.json({ success: true, following: !already });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Search users
router.get('/search', async (req, res) => {
  try {
    const q = req.query.q || '';
    const users = await User.find({
      $or: [
        { username: { $regex: q, $options: 'i' } },
        { name: { $regex: q, $options: 'i' } }
      ]
    }).select('-password');
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
