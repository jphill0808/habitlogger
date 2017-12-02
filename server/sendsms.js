require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendMessage = () => {
  client.messages.create({
  to: '+16784295786',
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

let today = new Date();
let time = today.getHours();
console.log(time);


module.exports = {
  sendMessage: sendMessage
}