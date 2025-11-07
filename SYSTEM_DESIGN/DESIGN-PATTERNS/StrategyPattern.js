class CreditCardPayment {
  pay(amount) {
    console.log(`Paying amount ${amount} by Credit card`);
  }
}

class PayPalPayment {
  pay(amount) {
    console.log(`Paying amount ${amount} by Pay Pal`);
  }
}

class PaymentStrategy {
  constructor(strategy) {
    this.strategy = strategy;
  }
  pay(amount) {
    this.strategy.pay(amount);
  }
}

let payPalPayment = new PaymentStrategy(new PayPalPayment());
payPalPayment.pay(100);

let creditCardPayment = new PaymentStrategy(new CreditCardPayment());
creditCardPayment.pay(700);
