class HeavyObject{
    load(){
        console.log('Loading Heavy Object');
    }
}

class Proxy{
    constructor(){
        this.loadObject = null;
    }
    load(){
        if(!this.loadObject){
            this.loadObject = new HeavyObject();
            console.log("Entering Inside")
        }
        console.log("Entering Here")
        this.loadObject.load();
    }
}
let proxy = new Proxy();

proxy.load()

proxy.load()