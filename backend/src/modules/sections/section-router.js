/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const express = require("express");
const router = express.Router();
const sectionController = require("./section-controller");

router.get("", sectionController.handleGetAllSections);
router.post("", sectionController.handleAddNewSection);
router.get("/:id", sectionController.handleGetSectionById);
router.put("/:id", sectionController.handleUpdateSectionById);
router.delete("/:id", sectionController.handleDeleteSectionById);

module.exports = { sectionRoutes: router };
