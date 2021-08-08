const School = require('./school');
const school = new School();

// call event rasing
school.on('bellRing', ({
    period, state
}) => {
    console.log("let raning for home", period, state)
});

school.startPeriod();

