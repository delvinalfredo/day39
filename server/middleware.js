function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(error);
    }
    console.log(err)
    res.status(500).json({
        error: "something wrong"
    })

}

module.exports = {
    errorHandler,
}