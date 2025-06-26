/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { env } = require("../config");
const { verifyToken, ApiError } = require("../utils");

const handlePasswordSetupToken = (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    throw new ApiError(404, "Invalid token");
  }

  const decodeToken = verifyToken(token, env.PASSWORD_SETUP_TOKEN_SECRET);
  if (!decodeToken || !decodeToken.id) {
    throw new ApiError(400, "Invalid token");
  }

  req.user = decodeToken;
  next();
};

module.exports = { handlePasswordSetupToken };
