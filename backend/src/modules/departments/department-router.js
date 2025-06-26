/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const express = require("express");
const router = express.Router();
const departmentController = require("./department-controller");

router.get("", departmentController.handleGetAllDepartments);
router.post("", departmentController.handleAddNewDepartment);
router.get("/:id", departmentController.handleGetDepartmentById);
router.put("/:id", departmentController.handleUpdateDepartmentById);
router.delete("/:id", departmentController.handleDeleteDepartmentById);

module.exports = { departmentRoutes: router };
