import mongoose from "mongoose";

const PostModel = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.model("Post", PostModel);

export default PostSchema;
