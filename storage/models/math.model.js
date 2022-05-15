function isWeekend() {
    return new Date().getDay()
}

function isLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
module.exports = {
    isWeekend,
    isLeapYear,
};
