// 流是一种抽象接口， 例如http中的request就是一种流
// 流的四种类型：
// Readable - 可读操作
// Writable - 可写操作
// Duplex - 可读可写操作
// Transform - 操作被写入数据，然后读出结果

//所有的stream都是eventEmitter的实例，常用的事件有：
// data - 当有数据可读时触发。
//
// end - 没有更多的数据可读时触发。
//
// error - 在接收和写入过程中发生错误时触发。
//
// finish - 所有数据已被写入到底层系统时触发。

const fs = require('fs');
//
// let data = '';
// let readStream = fs.createReadStream('./streamText.txt');
//
// readStream.on('data', function (chunck) {
//     data += chunck;
// });
//
// readStream.on('error', function (e) {
//     console.log(e);
// });
// readStream.on('end', function () {
//     console.log('读取完成');
//     // write()
// });
//
// function write() {
//     let writeStream = fs.createWriteStream('./writeStreamText.txt');
//     writeStream.write(data, 'utf8');
//
//     writeStream.on('finish', function () {
//         console.log('写入完成');
//     });
//     writeStream.end('需要有结尾，可以不传值');
//     writeStream.on('error', function (err) {
//         console.log(err.stack);
//     });
// }
// 管道
let readStream = fs.createReadStream('./streamText.txt');
let writeStream = fs.createWriteStream('./writeStreamText.txt');

readStream.pipe(writeStream); // 管道可以链式调用
