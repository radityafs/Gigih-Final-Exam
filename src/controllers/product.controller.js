import response from "../helpers/response.helper.js";
import { getCommentsByLiveVideoId } from "../models/product.model.js";

const productByLiveVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const products = await getCommentsByLiveVideoId(id);

    if (!products) {
      return response.failed(res, "Get products failed", "failed");
    }

    return response.success(res, products, "success", "Get products success");
  } catch (error) {
    return response.failed(res, error.message, 500);
  }
};

export { productByLiveVideo };
