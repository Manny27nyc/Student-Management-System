/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { ApiError } = require("../utils");

const isUserAdmin = (req, res, next) => {
    const { roleId } = req.user;
    if (roleId !== 1) {
        throw new ApiError(403, "You do not have permission to this resource");
    }
    next();
}

module.exports = { isUserAdmin };