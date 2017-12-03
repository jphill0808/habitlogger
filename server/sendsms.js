require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);
const sendMessage = (userPhoneNumber) => {
  client.messages.create({
  to: `+1{userPhoneNumber}`,
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

let today = new Date();
let time = today.getHours();
console.log(time);

module.exports = {
  sendMessage: sendMessage,
  testFunc: testFunc
}