const db = require('../db/index.js');
const CronJob = require('cron').CronJob;
const sendMessage = require('./sendsms.js').sendMessage;

const compareTimeAndSend = (deadline, now, phoneNumb) => {
  let timeLeft = (deadline - now)/(1000 * 60);
  if(timeLeft <= 1440){// minutes of a day
    sendMessage(phoneNumb)
  }
}

const job = new CronJob({
  cronTime: '* * * * * *',
  onTick: function(){
    db.getInfo((list) => {
      console.log(list)
      for(var i = 0; i < list.length; i++){
        console.log(list[i])
      }
      // list.forEach((user) => {
      //   console.log('inside forEach')
      //   const deadline = user.deadline;
      //   console.log('deadline: ', deadline)
      //   let now = Date.now();
      //   if(!user.messageSent){
      //     compareTimeAndSend(deadline, now, user.phoneNumb);
      //     user.messageSent = true;
      //   }
      // })
    })
    console.log('this is on tick');
  },
  start: false,
});
job.start();

console.log('jobstatus: ', job.running);

exports.module = {
  job,
}