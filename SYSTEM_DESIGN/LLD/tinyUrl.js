class TinyUrl {
  constructor() {
    this.map = new Map();
    this.reverseMap = new Map();
    this.counter = 0;
    this.baseUrl = "http://baseurl.com/";
  }

  encode(longUrl) {
    if (this.reverseMap.has(longUrl)) {
      return this.reverseMap.get(longUrl);
    }
    let shortUrl = this.baseUrl + this.counter.toString(36);
    this.map.set(shortUrl, longUrl);
    this.reverseMap.set(longUrl, shortUrl);
    return shortUrl;
  }
  decode(shortUrl) {
    return this.map.get(shortUrl) || null;
  }
}

let tinyUrl = new TinyUrl();
let shortUrl = tinyUrl.encode('llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.co.uk');

console.log(shortUrl)
console.log(tinyUrl.decode(shortUrl));
