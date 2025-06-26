/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { Resend } = require("resend");
const { env } = require("../config");
const { ApiError } = require("./api-error");

const resend = new Resend(env.RESEND_API_KEY);
const sendMail = async (mailOptions) => {
  const { error } = await resend.emails.send(mailOptions);
  if (error) {
    throw new ApiError(500, "Unable to send email");
  }
};

module.exports = {
  sendMail,
};
