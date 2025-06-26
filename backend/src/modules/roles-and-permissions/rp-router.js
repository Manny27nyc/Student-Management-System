/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const express = require("express");
const router = express.Router();
const rpController = require("./rp-controller");

router.get("", rpController.handleGetRoles);
router.post("", rpController.handleAddRole);
router.post("/switch", rpController.handleSwitchRole);
router.put("/:id", rpController.handleUpdateRole);
router.post("/:id/status", rpController.handleRoleStatus);
router.get("/:id", rpController.handleGetRole);
router.get("/:id/permissions", rpController.handleGetRolePermission);
router.post("/:id/permissions", rpController.handleAddRolePermission);
router.get("/:id/users", rpController.handleGetUsersByRoleId);

module.exports = { rpRoutes: router };
