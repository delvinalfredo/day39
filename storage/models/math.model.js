function isWeekend() {
    return new Date().getDay()
}

function isLeapYear(year) {
    return new Date(year, 1, 29).getMonth() === 1;
}
module.exports = {
    isWeekend,
    isLeapYear,
};
