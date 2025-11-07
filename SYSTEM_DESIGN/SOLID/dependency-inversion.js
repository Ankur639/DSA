class MessageSender {
  sendMessage(receiver, message) {
    throw new Error("Method not implemented");
  }
}

class EmailNotificationSender extends MessageSender {
  sendMessage(receiver, message) {
    console.log(`${receiver} email send with message ${message}`);
  }
}

class SmsNotificationSender extends MessageSender {
  sendMessage(receiver, message) {
    console.log(`${receiver} sms send with message ${message}`);
  }
}

class Sender {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(receiver, message) {
    this.sender.sendMessage(receiver, message);
  }
}

const email = new Sender(new EmailNotificationSender());
email.sendMessage('Ankur','Email sent')

const sms = new Sender(new SmsNotificationSender());
sms.sendMessage('rajeev','Sms sent')