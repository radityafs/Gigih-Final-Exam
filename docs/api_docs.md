## GigihStream API Documentation

This document provides details about the GigihStream API endpoints and their functionalities. The API is designed to interact with the GigihStream application, allowing users to retrieve live video data, comments, products, and post comments on live videos.

### Endpoint: `/seed`

#### Description

This endpoint is used to generate seed data in the database. Seed data can be used to populate the database with sample data for testing and development purposes.

#### Request

- Method: `POST`
- Route: `/seed`

#### Response

- Success Response:

```json
{
  "code": 200,
  "status": "success",
  "message": "Seed data success"
}
```

### Base Route

The base route for all API endpoints below is:

```
/api/v1/
```

### Endpoint: `/live_videos`

#### Description

This endpoint is used to retrieve all live videos available on GigihStream.

#### Request

- Method: `GET`
- Route: `/live_videos`

#### Response

- Success Response:

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "_id": "liveVideoId1",
      "videoImageUrl": "https://example.com/thumbnails/video1.jpg",
      "videoTitle": "Live Video 1",
      "videoUsername": "user1"
    },
    {
      "_id": "liveVideoId2",
      "videoImageUrl": "https://example.com/thumbnails/video2.jpg",
      "videoTitle": "Live Video 2",
      "videoUsername": "user2"
    }
    // More live video objects...
  ],
  "message": "Retrieved all live videos"
}
```

### Endpoint: `/live_video/:id`

#### Description

This endpoint is used to retrieve the detailed information of a single live video based on its unique ID.

#### Request

- Method: `GET`
- Route: `/live_video/:id`

#### Response

- Success Response:

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "_id": "liveVideoId1",
    "videoImageUrl": "https://example.com/thumbnails/video1.jpg",
    "videoTitle": "Live Video 1",
    "videoUsername": "user1"
    // Additional live video details...
  },
  "message": "Retrieved live video details"
}
```

### Endpoint: `/live_video/:id/comments`

#### Description

This endpoint is used to retrieve all comments associated with a specific live video based on its unique ID.

#### Request

- Method: `GET`
- Route: `/live_video/:id/comments`

#### Response

- Success Response:

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "_id": "commentId1",
      "comment": "This is a comment.",
      "avatar": "https://example.com/avatars/avatar1.jpg",
      "username": "user1"
    },
    {
      "_id": "commentId2",
      "comment": "Another comment.",
      "avatar": "https://example.com/avatars/avatar2.jpg",
      "username": "user2"
    }
    // More comment objects...
  ],
  "message": "Retrieved all comments for the live video"
}
```

### Endpoint: `/live_video/:id/products`

#### Description

This endpoint is used to retrieve all products associated with a specific live video based on its unique ID.

#### Request

- Method: `GET`
- Route: `/live_video/:id/products`

#### Response

- Success Response:

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "_id": "productId1",
      "productName": "Product 1",
      "productPrice": "29.99",
      "productLink": "https://example.com/products/product1",
      "productImageUrl": "https://example.com/images/product1.jpg"
    },
    {
      "_id": "productId2",
      "productName": "Product 2",
      "productPrice": "19.99",
      "productLink": "https://example.com/products/product2",
      "productImageUrl": "https://example.com/images/product2.jpg"
    }
    // More product objects...
  ],
  "message": "Retrieved all products for the live video"
}
```

### Endpoint: `/live_video/:id/comment`

#### Description

This endpoint is used to post a new comment on a specific live video based on its unique ID.

#### Request

- Method: `POST`
- Route: `/live_video/:id/comment`
- Body Parameters:
  - `comment`: String (required) - The content of the comment.
  - `avatar`: String (required) - URL or path to the user's avatar image.
  - `username`: String (required) - Username of the user posting the comment.

#### Response

- Success Response:

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "_id": "newCommentId",
    "comment": "This is a new comment.",
    "avatar": "https://example.com/avatars/avatar3.jpg",
    "username": "user3"
  },
  "message": "Comment posted successfully"
}
```

- Error Response:

```json
{
  "code": 400,
  "status": "failed",
  "error": "Invalid request data"
}
```

---

This concludes the GigihStream API Documentation. For any further queries or assistance regarding the API endpoints or responses, please don't hesitate to contact our technical team. Happy coding!
