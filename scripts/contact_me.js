"use strict";
let datafire = require('datafire');

var google_gmail = require('@datafire/google_gmail').actions;
module.exports = new datafire.Action({
  inputs: [{
    title: "name",
    type: "string",
    maxLength: 5000
  }, {
    title: "email",
    type: "string",
    pattern: ".*@.*\\..*",
    maxLength: 254
  }, {
    type: "string",
    title: "message"
  }],
  handler: async (input, context) => {
    let message = await google_gmail.buildMessage({
      to: "radair2842@gmail.com",
      from: "radair2842@gmail.com",
      subject: "A new message from " + input.name,
      body: input.message + "\nReply to : " + input.email,
    }, context);
    let sent = await google_gmail.users.messages.send({
      userId: "me",
      body: {
        raw: message,
      },
    }, context);
    return "Success";
  },
});