class Printer {
  print(doc) {
    console.log(`Printing the document ${doc}`);
  }
}

class Scanner {
  scan(doc) {
    console.log(`Scanning the document ${doc}`);
  }
}

class MultiFunctionDevice {
  constructor() {
    this.printer = new Printer();
    this.scanner = new Scanner();
  }

  print(doc) {
    this.printer.print(doc);
  }
  scan(doc) {
    this.scanner.scan(doc);
  }
}

class SimplePrinter {
  constructor() {
    this.printer = new Printer();
  }
  print(doc) {
    this.printer.print(doc);
  }
}

const multiFunctionDevice = new MultiFunctionDevice();
multiFunctionDevice.print('Doc1.pdf');
multiFunctionDevice.scan('Image.jpg')

const simplePrinter = new SimplePrinter();
simplePrinter.print('Doc2.pdf')