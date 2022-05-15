const mathModel = require("../../storage/models/math.model");

const isWeekend = async (_, res) => {
    try {
        const result = await mathModel.isWeekend();
        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

const isLeapYear = async (_, res) => {
    try {
        const result = await mathModel.isLeapYear();
        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

module.exports = {
    isWeekend,
    isLeapYear,
};
