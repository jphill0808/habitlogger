require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendMessage = (userPhoneNumber) => {
  client.messages.create({
  to: `+1${userPhoneNumber}`,
  from: process.env.FROM_PHONE_NUMBER,
  body: 'yo live long and prosper css master'
  })
  .then((message) => {
    console.log(`${message} sent!`)
  })
  .catch(err => {
    console.log(err)
  })
}

const testFunc = (hi) =>{
  console.log('testFunc parameter: ', hi);
}

let today = new Date().getHours();
// let time = today.getHours();
console.log(today);
const then = Date.parse('2017-12-03T17:36:15.074Z');
const now = Date.now()
let between = (then - now)/(1000);
console.log(Math.floor(between));
console.log(Math.floor(between)===0)
// console.log(now)
// console.log(Date.parse('2017-12-31T14:38:15.074Z'))

module.exports = {
  sendMessage: sendMessage,
  testFunc: testFunc
}