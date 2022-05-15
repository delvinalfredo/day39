function checkError(handler) {
    return function (req, res, next) {
        handler(req, res).catch(next)
    };
}

module.exports = { checkError };