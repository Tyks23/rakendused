const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const user = req.user;
  const posts = await Post.find({
    user: user.id,
  });

  res.status(200).send(posts)
}

exports.createPost = async (req, res) => {
  const {title, text} = req.body;
  const user = req.user;

  const createdPost = new Post({
    title,
    text,
    user: user.id,
  })

  const savedPost = await createdPost.save()

  res.status(200).send(savedPost);
}

exports.updatePost = async (req, res) => {
  const {id} = req.params;
  const user = req.user;
  const post = await Post.findOneAndUpdate({
    _id: id,
    user: user.id,
  }, req.body);

  if (!post) res.status(404).send("No post with that id found")

  const updatedPost = await Post.findOne({_id: id})
  res.status(200).send(updatedPost);
}

exports.deletePost = async (req, res) => {
  const {id} = req.params;
  const user = req.user;

  const post = await Post.findOneAndDelete({
    _id: id,
    user: user.id,
  })

  if (!post) res.status(404).send("No post with that id found")
  res.status(204).end();
}