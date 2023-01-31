// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplyValue) {
    return function (value) {
        return multiplyValue * value;
    }
}

function fareDoubler(fare) {
    return fare *2
}

function fareTripler(fare) {
    return fare *3
}

const selectDifferentDrivers = function (drivers,returnDrivers) {
    return returnDrivers(drivers)
}
    