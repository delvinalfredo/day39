const mathModel = require("../../storage/models/math.model");

const is21Century = async (_, res) => {
    try {
        const result = await mathModel.is21Century();
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
    is21Century,
    isWeekend,
    isLeapYear,
};
