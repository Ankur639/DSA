class PaymentProcessor {
  constructor(amount) {
    this.amount = amount;
  }
  pay() {
    console.log(`Paying amount ${this.amount}`);
  }
}

class PayPalPaymentProcessor extends PaymentProcessor {
  pay() {
    console.log(`Paying paypal payment of $ ${this.amount}`);
  }
}

class CreditCardPaymentProcessor extends PaymentProcessor {
  pay() {
    console.log(`Paying credit card payment of $ ${this.amount}`);
  }
}

const paypal = new PayPalPaymentProcessor(10);
paypal.pay();

const credit = new CreditCardPaymentProcessor(20);
credit.pay()
