// 基础的类
class Person {
  // 使用＃ 可以让类的数据变为私有 直接访问访问不到 需要通过 get set
  #name;
  #age;
  #gender;
  // 构造函数
  constructor(name, age, gender) {
    // this.#name = name;
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
  }
  //   通过 get 方法 暴露出 私有属性
  get name() {
    return this.#name;
  }
  // 通过set 去暴露出需要更改的数据，
  set name(newname) {
    return (this.#name = newname);
  }
}
const p1 = new Person("陈冠希");
// 更改
p1.name = "刘德华";
console.log(p1.name);
/*
 - 类的封装就是为了保护 当前 class 内的数据
 - 通过 # 去设置 私有属性 比如  #name
 -  读取通过 get 暴露
 - 修改透过 set 暴露之后修改
*/
