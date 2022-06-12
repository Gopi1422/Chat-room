const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const authenticateUser = asyncHandler(async (req, res, next) => {
  const publicUrls = ["/auth/sendOtp", "/auth/verifyOtp", "/auth/refresh"];

  const url = req.url;

  if (publicUrls.includes(url)) {
    next();
  } else {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        const authHeader = req.headers["authorization"];
        const bearerToken = authHeader.split(" ");
        const accessToken = bearerToken[1];

        if (!accessToken) {
          return res.status(401).send({ msg: `Not Authorized, No token!!` });
        }

        jwt.verify(
          accessToken,
          process.env.JWT_AUTH_TOKEN,
          async (err, decodedData) => {
            if (decodedData) {
              const phone = decodedData.data;
              req.user = await User.findOne({ phone: phone });
              // console.log(phone);
              next();
            } else if (err.name === "TokenExpiredError") {
              return res
                .status(403)
                .send({ success: false, msg: `Access Token Expired!!` });
            } else {
              // console.log("error....");
              console.error(err);
              res.status(403).send({ err, msg: `User not Authenticated!!` });
            }
          }
        );
      } catch (error) {
        console.log(error.response);
      }
    }
  }
});

module.exports = { authenticateUser };
