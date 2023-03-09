// 定义一个 class 类
class Person {
  name;
  age;
  gender;
  //   static 为静态类中的静态属性，是不被暴漏的d对象属性。要通过 Person去调用
  static test = "我爱拍照";
  //   constructor 为构造函数
  constructor(name, age, gender) {
    // this 指向了 person 类对象 所以可以使用 通过类定义的数据
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const p1 = new Person("陈冠希", "12", "男");
// console.log(p1);
console.log(p1.test);
