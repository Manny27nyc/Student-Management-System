/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { processDBRequest } = require("../../utils");

const getAllSections = async () => {
    const query = "SELECT * FROM sections";
    const { rows } = await processDBRequest({ query });
    return rows;
}

const addNewSection = async (name) => {
    const query = "INSERT INTO sections(name) VALUES ($1)";
    const queryParams = [name];
    const { rowCount } = await processDBRequest({ query, queryParams });
    return rowCount;
}

const getSectionById = async (id) => {
    const query = "SELECT * FROM sections WHERE id = $1";
    const queryParams = [id];
    const { rows } = await processDBRequest({ query, queryParams });
    return rows[0];
}

const updateSectionById = async (payload) => {
    const { id, name } = payload;
    const query = `
        UPDATE sections
            SET name = $1
        WHERE id = $2
    `;
    const queryParams = [name, id];
    const { rowCount } = await processDBRequest({ query, queryParams });
    return rowCount;
}

const deleteSectionById = async (id) => {
    const query = `DELETE FROM sections WHERE id = $1`;
    const queryParams = [id];
    const { rowCount } = await processDBRequest({ query, queryParams });
    return rowCount;
}

module.exports = {
    getAllSections,
    getSectionById,
    updateSectionById,
    deleteSectionById,
    addNewSection
};
