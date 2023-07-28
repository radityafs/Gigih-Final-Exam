import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
    productLink: {
      type: String,
      required: true,
    },
    productImageUrl: {
      type: String,
      required: true,
    },
    liveVideoId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "LiveVideo",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
