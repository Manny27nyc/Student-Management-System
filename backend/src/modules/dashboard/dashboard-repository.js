/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { processDBRequest } = require("../../utils");

const getUserDashboardData = async (userId) => {
    const query = `SELECT * FROM get_dashboard_data($1)`;
    const queryParams = [userId];
    const { rows } = await processDBRequest({ query, queryParams });
    return rows[0].get_dashboard_data;
};

module.exports = {
    getUserDashboardData
};
