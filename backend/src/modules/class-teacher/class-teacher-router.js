/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const express = require("express");
const router = express.Router();
const classTeacherController = require("./class-teacher-controller");
const { checkApiAccess } = require("../../middlewares");

router.get("", checkApiAccess, classTeacherController.handleGetClassTeachers);
router.post("", checkApiAccess, classTeacherController.handleAddClassTeacher);
router.get("/:id", checkApiAccess, classTeacherController.handleGetClassTeacherDetail);
router.put("/:id", checkApiAccess, classTeacherController.handleUpdateClassTeacherDetail);

module.exports = { classTeacherRoutes: router };
