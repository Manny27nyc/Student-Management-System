/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const express = require("express");
const router = express.Router();
const classesController = require("./classes-controller");
const { checkApiAccess } = require("../../middlewares");

router.get("", checkApiAccess, classesController.handleFetchAllClasses);
router.get("/:id", checkApiAccess, classesController.handleFetchClassDetail);
router.post("", checkApiAccess, classesController.handleAddClass);
router.put("/:id", checkApiAccess, classesController.handleUpdateClass);
router.delete("/:id", checkApiAccess, classesController.handleDeleteClass);

module.exports = { classesRoutes: router };
