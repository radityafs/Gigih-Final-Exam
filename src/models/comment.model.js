import db from "../database/mongo.database.js";

const getAllCommentsByLiveVideo = async (liveVideoId) =>
  await db.collection("comments").find({ liveVideoId }).toArray();

const insertComment = async (comment) =>
  await db.collection("comments").insertOne(comment);

export { getAllCommentsByLiveVideo, insertComment };
