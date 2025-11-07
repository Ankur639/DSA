// A class should have only one responsibility

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getUserInfo() {
    return `${this.name} has email ${this.email}`;
  }
}

class EmailService {
  constructor(email, message) {
    this.email = email;
    this.message = message;
  }
  sendEmail() {
    console.log(`Email sent to ${this.email} with message ${this.message}`);
  }
}

const user = new User("Ankur", "ankur@email.com");
console.log(user.getUserInfo());

const email = new EmailService(user.email, "Welcome to our platform");
email.sendEmail();
