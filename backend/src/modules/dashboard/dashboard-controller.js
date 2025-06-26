/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const asyncHandler = require("express-async-handler");
const { fetchDashboardData } = require("./dashboard-service");

const handleGetDashboardData = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const dashboard = await fetchDashboardData(id);
    res.json(dashboard);
});

module.exports = {
    handleGetDashboardData
};
