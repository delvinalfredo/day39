function is21Century() {
    return new Date().getFullYear() >= 2000 && new Date().getFullYear() < 2100;
}

function isWeekend() {
    return new Date().getDay()
}

function isLeapYear() {

}

module.exports = {
    is21Century,
    isWeekend,
    isLeapYear,
};
