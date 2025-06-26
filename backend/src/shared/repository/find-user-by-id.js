/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { processDBRequest } = require("../../utils");

const findUserById = async (id) => {
    const query = `
        SELECT
            id,
            email,
            role_id,
            password,
            is_active,
            is_email_verified
        FROM users where id = $1
    `;
    const queryParams = [id];
    const { rows } = await processDBRequest({ query, queryParams });
    return rows[0];
}


module.exports = { findUserById };
