/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const express = require("express");
const router = express.Router();
const accountController = require("./account-controller");

router.post("/change-password", accountController.handlePasswordChange);
router.get("/me", accountController.handleGetAccountDetail);

module.exports = { accountRoutes: router };
