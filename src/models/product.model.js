import db from "../database/mongo.database.js";
import { ObjectId } from "mongodb";

const getCommentsByLiveVideoId = async (liveVideoId) =>
  await db
    .collection("products")
    .find({
      liveVideoId: new ObjectId(liveVideoId),
    })
    .toArray();

export { getCommentsByLiveVideoId };
