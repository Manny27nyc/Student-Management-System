/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const asyncHandler = require("express-async-handler");
const { processPasswordChange, processGetAccountDetail } = require("./account-service");
const { setAllCookies, clearAllCookies } = require("../../cookie");

const handlePasswordChange = asyncHandler(async (req, res) => {
    const { newPassword, oldPassword } = req.body;
    const { id: userId } = req.user;
    const {
        accessToken,
        refreshToken,
        csrfToken,
        message
    } = await processPasswordChange({ userId, oldPassword, newPassword });

    clearAllCookies(res);
    setAllCookies(res, accessToken, refreshToken, csrfToken)

    res.json({ message });
});

const handleGetAccountDetail = asyncHandler(async (req, res) => {
    const { id: userId } = req.user;
    const accountDetail = await processGetAccountDetail(userId);
    res.json(accountDetail);
});

module.exports = {
    handlePasswordChange,
    handleGetAccountDetail,
};