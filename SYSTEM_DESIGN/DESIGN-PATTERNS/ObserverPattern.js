class NewsLetter {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  notify(message) {
    this.subscribers.forEach((subscriber) => subscriber.update(message));
  }
}

class Subscriber{
    constructor(name){
        this.name = name;
    }
    update(message){
        console.log(`${this.name} has received message ${message}`);
    }
}

const newsLetter = new NewsLetter();
const alice = new Subscriber('Alice');
const ankur = new Subscriber('Ankur');
newsLetter.subscribe(alice);
newsLetter.subscribe(ankur)

newsLetter.notify('New Message');