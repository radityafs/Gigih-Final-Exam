import {
  MONGO_DBNAME,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_URI,
} from "../../env.js";
import mongoose from "mongoose";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  dbName: MONGO_DBNAME,
  user: MONGO_USERNAME,
  pass: MONGO_PASSWORD,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("[db]: Connected to MongoDB");
});

export default db;
