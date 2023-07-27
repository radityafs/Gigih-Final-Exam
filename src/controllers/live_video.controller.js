import response from "../helpers/response.helper.js";
import { getLiveVideos, getLiveVideoById } from "../models/live_video.model.js";

const getAllVideos = async (req, res) => {
  try {
    const liveVideos = await getLiveVideos();

    if (!liveVideos) {
      return response.failed(res, "Get live videos failed", "failed");
    }

    return response.success(
      res,
      liveVideos,
      "success",
      "Get live videos success"
    );
  } catch (error) {
    return response.failed(res, error.message, 500);
  }
};

const getVideoById = async (req, res) => {
  try {
    const { id } = req.params;

    const liveVideo = await getLiveVideoById(id);

    if (!liveVideo) {
      return response.failed(res, "Get live video failed", "failed");
    }

    return response.success(
      res,
      liveVideo,
      "success",
      "Get live video success"
    );
  } catch (error) {
    return response.failed(res, error.message, 500);
  }
};

export { getAllVideos, getVideoById };
