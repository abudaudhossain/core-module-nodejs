const School = require('./school');
const school = new School();

school.on('bellRing', ({
    period, state
}) => {
    console.log("let raning for home", period, state)
});

school.startPeriod();

