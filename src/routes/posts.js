const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');
const User = require('../models/User');

// Create post
router.post('/', auth, async (req, res) => {
  try {
    const { content, image } = req.body;
    const post = new Post({ author: req.user.id, content, image });
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get feed (recent posts + from following)
router.get('/feed', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const following = me.following.concat([me.id]);
    const posts = await Post.find({ author: { $in: following } }).populate('author', 'username name avatar').sort({ createdAt: -1 }).limit(50);
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Like / Unlike
router.post('/:id/like', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    const has = post.likes.includes(req.user.id);
    if (has) post.likes.pull(req.user.id); else post.likes.push(req.user.id);
    await post.save();
    res.json({ likes: post.likes.length, liked: !has });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Comment
router.post('/:id/comment', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    post.comments.push({ user: req.user.id, text: req.body.text });
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
