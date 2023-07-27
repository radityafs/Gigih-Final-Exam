import mongoose from "mongoose";

const liveVideoSchema = new mongoose.Schema(
  {
    videoImageUrl: {
      type: String,
      required: true,
    },
    videoTitle: {
      type: String,
      required: true,
    },
    videoUsername: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("LiveVideo", liveVideoSchema);
