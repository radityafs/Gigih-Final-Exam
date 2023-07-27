import db from "../database/mongo.database.js";

const getCommentsByLiveVideoId = async (liveVideoId) =>
  await db.collection("products").find({ liveVideoId }).toArray();

export { getCommentsByLiveVideoId };
