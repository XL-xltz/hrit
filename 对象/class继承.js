class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }
  seyHello() {
    console.log("动物叫hhh");
  }
  //   get 暴露出属性
  get name() {
    return this.#name;
  }
}
// dog 类 继承自 Animal 类 父类的所有属性都可以被继承
class dog extends Animal {
  seyHello() {
    console.log("汪汪汪");
  }
}
//car 类
class cat extends Animal {
  age;
  // 需要修改父类的属性时，子类需要重写 constructor
  //   constructor 内必须要有 super 关键字 通过 super 去传递参数
  constructor(name, age) {
    super(name);
    this.age = age;
    super.seyHello();
  }
  seyHello() {
    console.log("喵喵喵");
  }
}
const p1 = new dog("小狗");
const p2 = new cat("小猫", "2");

console.log(p1.name);
console.log(p2.name, p2.age);
p1.seyHello();
p2.seyHello();
