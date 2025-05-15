class Person{

    constructor(name){
        this.name = name;
    }
    sayName(){
        return `hello m name is ${this.name}!`;
    }


}
module.exports = {
    Person,
};