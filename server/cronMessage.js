const db = require('../db/index.js');
const CronJob = require('cron').CronJob;
const sendMessage = require('./sendsms.js').sendMessage;

const compareTimeAndSend = (user, now, cb) => {
  let timeLeft = (user.deadline - now)/(1000 * 60);
  if(timeLeft <= 1440 && timeLeft >= 0){ // less than 1 day(minutes) left && not overdue
    sendMessage(user.phoneNumb, user.habit, timeLeft)
    cb(user.habit, user.username)
  }
}

const sendMessageCron = new CronJob({
  cronTime: '* * * * * *',
  onTick: function(){
    db.getInfo((list) => {
      console.log('data:::::::: ', list)
      list.forEach((user) => {
        const deadline = user.deadline;
        let now = Date.now();
        if(user.messageSent === false){
          compareTimeAndSend(user, now, (habit, name)=>{
           db.updateMessage(habit, name);
          });
        }
      })
    })
  },
  start: false,
});

// sendMessageCron.start();

exports.module = {
  sendMessageCron,
}