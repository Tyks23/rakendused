const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Post = model("Post", postSchema)

module.exports = Post