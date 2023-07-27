import { ObjectId } from "mongodb";
import db from "../database/mongo.database.js";

const getLiveVideos = async () =>
  await db.collection("livevideos").find().toArray();

const getLiveVideoById = async (id) =>
  await db.collection("livevideos").findOne({ _id: new ObjectId(id) });

export { getLiveVideos, getLiveVideoById };
