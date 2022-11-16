function makeproducts(name,price){
    this.name=name;
    this.price=price;
    this.부가세=function(){
        console.log(price*0.1)
    }
}

var product1 = new makeproducts('shirts', 50000);
var product2 = new makeproducts('pants', 10000);
