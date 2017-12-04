require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendMessage = (userPhoneNumber, habit, time) => {
  client.messages.create({
  to: `+1${userPhoneNumber}`,
  from: process.env.FROM_PHONE_NUMBER,
  body: `Your ${habit} is due in ${time} minutes`
  })
  .then((message) => {
    console.log(`${message} sent!`)
  })
  .catch(err => {
    console.log(err)
  })
}

module.exports = {
  sendMessage: sendMessage,
}