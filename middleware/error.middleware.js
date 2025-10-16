/** @format */

const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.error(error);
    // mongoose bad objectId

    if (err.name === "CastError") {
      const message = "moongoose bad objectId";
      error = new Error(message);
      error.statusCode = 404;
    }

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "internal server error",
    });
  } catch (error) {
    console.log("error with middleware");
    next(error);
  }
};

export default errorMiddleware;
