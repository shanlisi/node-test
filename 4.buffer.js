// Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据
let buf = Buffer.from('abc');
let buf1 = Buffer.from('efg');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
let buf2 = Buffer.concat([buf, buf1], 5);
console.log(buf2);
console.log(buf2.toString());

buf1.copy(buf2, 4,2,3); // buffer的长度不会变
console.log(buf2.toString());