/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { getUserDashboardData } = require("./dashboard-repository");

const fetchDashboardData = async (id) => {
    const data = await getUserDashboardData(id);

    if (!data) {
        throw new ApiError(404, "Dashboard data not found");
    }

    return data;
}

module.exports = {
    fetchDashboardData
};