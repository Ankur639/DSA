class Singleton{
    static instance;
    constructor(value){
        if(Singleton.instance){
            return Singleton.instance;
        }
        this.value = value;
        Singleton.instance = this;
    }
    getValue(){
        return this.value;
    }
}

let s1 = new Singleton('First Instance');
let s2 = new Singleton('Second Instance');
console.log(s1===s2);