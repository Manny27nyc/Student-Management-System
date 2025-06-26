/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const { createHmac } = require("crypto");
const { env } = require("../config");

const generateCsrfHmacHash = (csrfToken) => {
  const hash = createHmac("sha256", env.CSRF_TOKEN_SECRET)
    .update(csrfToken)
    .digest("hex");
  return hash;
};

const verifyCsrfToken = (csrfToken, hmacHash) => {
  const hashGenerated = generateCsrfHmacHash(csrfToken);
  return hashGenerated === hmacHash;
};

module.exports = {
  generateCsrfHmacHash,
  verifyCsrfToken,
};
