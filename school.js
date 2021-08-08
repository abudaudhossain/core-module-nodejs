
const EventEmitter = require('events');

// define school class 
class School extends EventEmitter{
    startPeriod(){
        console.log('Starte Class .....')
        setTimeout(() => {
            this.emit('bellRing',{
                period: 'Socend',
                state: 'period end',
            });
        }, 2000);
    }
}

module.exports = School;

