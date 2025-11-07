class User {
  constructor(name) {
    this.name = name;
  }

  getUserInfo() {
    return this.name;
  }
}

function addRole(user,role){
    user.role = role;
    let userInfo = user.getUserInfo;
    user.getUserInfo = function(){
        return `${userInfo.call(this)}, Role:${this.role}`
    }
}

let user = new User('Ankur');
addRole(user,'Admin');
console.log(user.getUserInfo())