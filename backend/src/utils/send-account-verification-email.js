/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { env } = require("../config");
const { generateToken } = require("./jwt-handle");
const { sendMail } = require("./send-email");
const { emailVerificationTemplate } = require("../templates");

const sendAccountVerificationEmail = async ({ userId, userEmail }) => {
  const pwdToken = generateToken(
    { id: userId },
    env.EMAIL_VERIFICATION_TOKEN_SECRET,
    env.EMAIL_VERIFICATION_TOKEN_TIME_IN_MS
  );
  const link = `${env.API_URL}/api/v1/auth/verify-email/${pwdToken}`;
  const mailOptions = {
    from: env.MAIL_FROM_USER,
    to: userEmail,
    subject: "Verify account",
    html: emailVerificationTemplate(link),
  };
  await sendMail(mailOptions);
};

module.exports = { sendAccountVerificationEmail };
