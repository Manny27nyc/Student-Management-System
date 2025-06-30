// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
const handle404Error = (req, res) => {
    res.status(404).json({
        error: "Resource not found"
    });
}

module.exports = { handle404Error };