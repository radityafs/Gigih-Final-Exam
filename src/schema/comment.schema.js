import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    liveVideoId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
