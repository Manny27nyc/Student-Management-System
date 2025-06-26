/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const asyncHandler = require("express-async-handler");
const { processGetAllDepartments, processAddNewDepartment, processGetDepartmentById, processUpdateDepartmentById, processDeleteDepartmentById } = require("./department-service");

const handleGetAllDepartments = asyncHandler(async (req, res) => {
    const departments = await processGetAllDepartments();
    res.json({ departments });
});

const handleAddNewDepartment = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const message = await processAddNewDepartment(name);
    res.json(message);
});

const handleGetDepartmentById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const department = await processGetDepartmentById(id);
    res.json(department);
});

const handleUpdateDepartmentById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const message = await processUpdateDepartmentById({ id, name });
    res.json(message);
});

const handleDeleteDepartmentById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const message = await processDeleteDepartmentById(id);
    res.json(message);
});

module.exports = {
    handleGetAllDepartments,
    handleGetDepartmentById,
    handleUpdateDepartmentById,
    handleDeleteDepartmentById,
    handleAddNewDepartment
};