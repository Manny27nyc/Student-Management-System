/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const jwt = require("jsonwebtoken");
const { ApiError } = require("./api-error");

const generateToken = (payload, secret, time) => {
    return jwt.sign(payload, secret, { expiresIn: time });
}

const verifyToken = (token, secret) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            throw new ApiError(400, "Token expired");
        }
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken,
};
