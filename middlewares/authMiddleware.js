const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Fetch token
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "No token provided",
      });
    }

    JWT.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized User",
          error,
        });
      }

      // FIX: store decoded user in req.user
      req.user = decoded;

      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Auth API",
      error,
    });
  }
};
