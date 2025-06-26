/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const express = require("express");
const router = express.Router();
const accessControlController = require("./access-control-controller");
const { isUserAdmin } = require("../../middlewares");

router.get("", isUserAdmin, accessControlController.handleGetAllAccessControls);
router.post("", isUserAdmin, accessControlController.handleAddAccessControl);
router.put("/:id", isUserAdmin, accessControlController.handleUpdateAccessControl);
router.delete("/:id", isUserAdmin, accessControlController.handleDeleteAccessControl);
router.get("/me", accessControlController.handleGetMyAccessControl);

module.exports = { accessControlRoutes: router };
