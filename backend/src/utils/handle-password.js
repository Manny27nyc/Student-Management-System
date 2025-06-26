/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const argon2 = require("argon2");
const { ApiError } = require("./api-error");

const generateHashedPassword = async (password) => {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
}

const verifyPassword = async (passwordFromDb, passwordFromUser) => {
    const isPasswordValid = await argon2.verify(passwordFromDb, passwordFromUser);
    if (!isPasswordValid) {
        throw new ApiError(400, "Invalid credential");
    }
}

module.exports = {
    generateHashedPassword,
    verifyPassword
};