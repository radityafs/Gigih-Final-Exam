import db from "../database/mongo.database.js";
import { ObjectId } from "mongodb";

const getLiveVideos = async () =>
  await db.collection("livevideos").find().toArray();

const getLiveVideoById = async (id) =>
  await db.collection("livevideos").findOne({ _id: new ObjectId(id) });

export { getLiveVideos, getLiveVideoById };
