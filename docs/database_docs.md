## GigihStream Database Documentation

This document provides an overview of the GigihStream database schema, including the collections and their fields. The database is designed to store information related to live videos, products, and user comments.

### Collections

The GigihStream database consists of the following collections:

#### 1. `liveVideo` Collection

The `liveVideo` collection stores information about live videos available on GigihStream.

| Field Name    | Data Type | Description                               |
| ------------- | --------- | ----------------------------------------- |
| \_id          | ObjectId  | Unique identifier for the live video.     |
| videoImageUrl | String    | URL of the video thumbnail image.         |
| videoTitle    | String    | Title of the live video.                  |
| videoUsername | String    | Username of the user who posted the video |

#### 2. `product` Collection

The `product` collection stores information about products available on GigihStream.

| Field Name      | Data Type            | Description                              |
| --------------- | -------------------- | ---------------------------------------- |
| \_id            | ObjectId             | Unique identifier for the product.       |
| productName     | String               | Name of the product.                     |
| productPrice    | String               | Price of the product.                    |
| productLink     | String               | URL link to the product.                 |
| productImageUrl | String               | URL of the product image.                |
| liveVideoId     | ObjectId (Reference) | Reference to the `liveVideo` collection. |

#### 3. `Comment` Collection

The `Comment` collection stores comments posted by users on live videos.

| Field Name  | Data Type            | Description                                  |
| ----------- | -------------------- | -------------------------------------------- |
| \_id        | ObjectId             | Unique identifier for the comment.           |
| comment     | String               | Content of the comment.                      |
| avatar      | String               | URL or path to the user's avatar image.      |
| username    | String               | Username of the user who posted the comment. |
| liveVideoId | ObjectId (Reference) | Reference to the `liveVideo` collection.     |

### Relationships

The GigihStream database has the following relationships between collections:

1. One-to-Many Relationship:
   - One `liveVideo` can have multiple `product` documents associated with it. The `liveVideoId` in the `product` collection references the corresponding `liveVideo`.
   - One `liveVideo` can have multiple `Comment` documents associated with it. The `liveVideoId` in the `Comment` collection references the corresponding `liveVideo`.

### Database Management

The GigihStream database is based on MongoDB, a NoSQL database. Collections and documents are managed within MongoDB, and relationships are represented using references. The database is designed to handle live video data, product information, and user comments efficiently.

---

This concludes the GigihStream Database Documentation. If you have any further queries or need assistance regarding the database schema or management, please don't hesitate to contact our technical team.
