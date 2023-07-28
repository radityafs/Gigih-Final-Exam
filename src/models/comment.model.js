import db from "../database/mongo.database.js";
import { ObjectId } from "mongodb";

const getAllCommentsByLiveVideo = async (liveVideoId) =>
  await db
    .collection("comments")
    .find({
      liveVideoId: new ObjectId(liveVideoId),
    })
    .toArray();

const insertComment = async (comment) =>
  await db.collection("comments").insertOne(comment);

export { getAllCommentsByLiveVideo, insertComment };
