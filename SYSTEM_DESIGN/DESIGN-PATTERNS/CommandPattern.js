class Light {
  turnOn() {
    console.log("Light is turn on");
  }
  turnOff() {
    console.log("Light is turn off");
  }
}

class Command {
  constructor(receiver, command) {
    this.receiver = receiver;
    this.command = command;
  }

  executeCommand() {
    this.receiver[this.command]();
  }
}
let light = new Light();
let turnOnCommand = new Command(light, "turnOn");
let turnOffCommand = new Command(light, "turnOff");
turnOnCommand.executeCommand();
turnOffCommand.executeCommand();
