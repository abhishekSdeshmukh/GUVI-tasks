class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }
}

let person = new Person("John Doe", 25, "123 Main St");

console.log("Name: " + person.getName());
console.log("Age: " + person.getAge());
console.log("Address: " + person.getAddress());

person.setName("Jane Doe");
person.setAge(30);
person.setAddress("456 Second St");

console.log("Name: " + person.getName());
console.log("Age: " + person.getAge());
console.log("Address: " + person.getAddress());
