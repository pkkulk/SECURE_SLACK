import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  category: String,
  summary: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Blog", blogSchema);
