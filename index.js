// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    returns `${this.name} saus meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name; 
    this.sex = sex;
  }
  speak() {
    returns `${this.name} saus woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    returns this.sex === 'male'? `It's me! ${this.name} the parrot!`: `${name} says squawk!`;
  }
}