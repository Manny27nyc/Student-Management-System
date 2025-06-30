// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
};

module.exports = { ApiError };