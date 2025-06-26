/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const express = require("express");
const router = express.Router();
const staffsController = require("./staffs-controller");

router.get("", staffsController.handleGetAllStaffs);
router.post("", staffsController.handleAddStaff);
router.get("/:id", staffsController.handleGetStaff);
router.put("/:id", staffsController.handleUpdateStaff);
router.post("/:id/status", staffsController.handleReviewStaffStatus);

module.exports = { staffsRoutes: router };
