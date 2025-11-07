class USASocket {
  PlugIn() {
    return `120V`;
  }
}

class AsiaSocket {
  PlugIn() {
    return "240V";
  }
}

class Socket {
  constructor(socket) {
    this.socket = socket;
  }
  getVoltageMethod() {
    return this.socket.PlugIn();
  }
}
let usa = new USASocket();
let socketAdapter = new Socket(usa);
console.log(socketAdapter.getVoltageMethod());

let asia = new AsiaSocket();
socketAdapter = new Socket(asia);
console.log(socketAdapter.getVoltageMethod());
