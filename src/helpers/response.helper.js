const response = {
  success: (res, data, status, message, pagination) => {
    if (pagination) {
      return res.json({
        code: 200,
        status,
        data,
        message,
        pagination,
      });
    }
    res.json({
      code: 200,
      status,
      data,
      message,
    });
  },
  failed: (res, error, code) => {
    res.status(code || 400).json({
      code: code || 400,
      status: "failed",
      error,
    });
  },
};

export default response;
