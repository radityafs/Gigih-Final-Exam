import {
  getAllCommentsByLiveVideo,
  insertComment,
} from "../models/comment.model.js";
import response from "../helpers/response.helper.js";

const commentsByLiveVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const comments = await getAllCommentsByLiveVideo(id);

    if (!comments) {
      return response.failed(res, "Get comments failed", "failed");
    }

    return response.success(res, comments, "success", "Get comments success");
  } catch (error) {
    return response.failed(res, error.message, 500);
  }
};

const createComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const comment = await insertComment({ ...body, liveVideoId: id });

    if (!comment) {
      return response.failed(res, "Create comment failed", "failed");
    }

    return response.success(res, comment, "success", "Create comment success");
  } catch (error) {
    return response.failed(res, error.message, 500);
  }
};

export { commentsByLiveVideo, createComment };
