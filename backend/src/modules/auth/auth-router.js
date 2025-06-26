/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const express = require("express");
const router = express.Router();
const { authenticateToken, csrfProtection, handleEmailVerificationToken, handlePasswordSetupToken, checkApiAccess } = require("../../middlewares");
const authController = require("./auth-controller");
const { validateRequest } = require("../../utils");
const { LoginSchema } = require("./auth-schema");

router.post("/login", validateRequest(LoginSchema), authController.handleLogin);
router.get("/refresh", authController.handleTokenRefresh);
router.post("/logout", authenticateToken, csrfProtection, authController.handleLogout);
router.get("/verify-email/:token", handleEmailVerificationToken, authController.handleAccountEmailVerify);
router.post("/setup-password", handlePasswordSetupToken, authController.handleAccountPasswordSetup);
router.post("/resend-email-verification", authenticateToken, csrfProtection, checkApiAccess, authController.handleResendEmailVerification);
router.post("/resend-pwd-setup-link", authenticateToken, csrfProtection, checkApiAccess, authController.handleResendPwdSetupLink);
router.post("/reset-pwd", authenticateToken, csrfProtection, checkApiAccess, authController.handlePwdReset);

module.exports = { authRoutes: router };
