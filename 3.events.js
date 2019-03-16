// node 事件都是基于观察者模式

const events  = require('events');
const emitter = new events.EventEmitter(); // 创建emitter实例

console.log(events);

function start() {
    console.log('start');
}
emitter.on('test', function (str) {
    console.log('start ' + (str || ''));
});
emitter.on('test', start);
emitter.off('test', start);
emitter.emit('test');
emitter.emit('test', 'test');




// const fs = require('fs');
// fs.readFile('./text.txt','utf8',function (err, data) {
//     if(err){
//         console.log(err.stack);
//     }
//     // data 是一个buffer
//     console.log(data.toString());
// });