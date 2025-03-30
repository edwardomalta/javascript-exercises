const leapYears = function(year) {
    // First test: if it is divisible by 4
    if (year % 4 === 0) {
        // this could be a leap year. Next test:
        if (year % 100 === 0) {
            // this could be not a Leap year; 
            if (year % 400 === 0 ) return true;
            else return false;
        } else return true;
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = leapYears;
