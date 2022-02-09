//  抽象类 abstract class Animal{} 不能被new 对象 只能被继承  抽象类可以添加抽象方法  使用abstract 没有方法体  只能定义在抽象类中,子类必须对抽象方法进行重写
class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`${this.name}在叫`);
    }
}

class Dog extends Animal{
    sayHello() {
        console.log('汪汪汪');
    }
}
class Cat extends Animal{
    sayHello() {
        console.log('喵喵喵');
    }
}

const dog = new Dog('小黑', 5);
console.log(dog);
dog.sayHello();
const cat = new Cat('咪咪', 3);
console.log(cat);
cat.sayHello();