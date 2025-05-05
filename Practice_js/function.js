function Person(name, age){
    this.name=name;
    this.age=age;
    return this;
}
let Person1 = Person("Kumar", 20)
console.log(Person1);
console.log(Person1.name);
console.log(Person1.age);