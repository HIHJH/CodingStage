
//es5
var 부모 = {name:"kim", age:50};
var 자식 = Object.create(부모);

자식.age = 30

//es6
class 부모{
    constructor(age){
        this.name = "lee";
        this.age = age;
        this.sayHi = function(){
            console.log("###")
        }
    }
    sayHello(){
        console.log("@@@")
    }
}

var 자식 = new 부모(13);