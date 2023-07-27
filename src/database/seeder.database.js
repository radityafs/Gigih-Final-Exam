import db from "./mongo.database.js";

import {
  liveVideoSchema,
  commentSchema,
  productSchema,
} from "../schema/_index.schema.js";
import { faker } from "@faker-js/faker";

const initializeData = async () => {
  for (let i = 0; i < 10; i++) {
    const liveVideo = new liveVideoSchema({
      videoImageUrl: faker.image.url(),
      videoTitle: faker.lorem.sentence(),
      videoUsername: faker.internet.userName(),
    });

    await db.collection("livevideos").insertOne(liveVideo);

    console.log(`[seeder]: live video ${i + 1} seeded`);

    for (let j = 0; j < 10; j++) {
      const comment = new commentSchema({
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        comment: faker.lorem.sentence(),
        liveVideoId: liveVideo._id,
      });

      await db.collection("comments").insertOne(comment);

      console.log(`[seeder]: live video ${i + 1} - comment ${j + 1} seeded`);
    }

    for (let k = 0; k < 10; k++) {
      const product = new productSchema({
        productImageUrl: faker.image.url(),
        productName: faker.commerce.productName(),
        productPrice: faker.commerce.price(),
        liveVideoId: liveVideo._id,
      });

      await db.collection("products").insertOne(product);

      console.log(`[seeder]: live video ${i + 1} - product ${k + 1} seeded`);
    }
  }
};

const seeder = async () => {
  try {
    console.log("[seeder]: running...");

    db.dropDatabase();
    console.log("[seeder]: Database dropped");

    await initializeData();

    console.log("[seeder]: Done");
  } catch (error) {
    console.log(error);
  }
};

export { initializeData, seeder };
