//  copyWithin 浅拷贝
[1, 2, 3, 4, 5, 6, 7, 8].copyWithin(1);
//fill 第一个 参数是 填充物 第二个是开始 第三个是结束
[1, 2, 3, 4, 5, 6, 7, 8].fill(2, 3, 5);

//pop 删除最后一个
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.pop();
// push 添加到数组末尾
arr.push();
// shift  ushift 删除数组的第一个元素
arr.shift();
// sort 元素排序
arr.sort();
// splice 三个参数 第一个 从哪里开始删除，第二个是删除几个 最后是添加什么
arr.splice(3, 2, "true", "false"); // [4, 5] // [4, 5]
