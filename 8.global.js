// console.log(__filename); // 执行脚本的文件名，返回绝对路径
// console.log(__dirname); // 当前脚本所在目录，绝对路径

// setTimeout(()=>{});
// clearTimeout(()=>{});
// setInterval(()=>{});
// clearInterval(()=>{});

// console.log(process);
// 1	exit
// 当进程准备退出时触发。
// 2	beforeExit
// 当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。
// 3	uncaughtException
// 当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。
// 4	Signal 事件
// 当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。

//
// process.on('exit',(code)=>{
//     console.log('exit');
//     console.log(code, arguments);
// });
// process.on('beforeExit',(code)=>{
//     console.log('beforeExit');
//     console.log(code, arguments);
// });
// process.on('uncaughtException',(code)=>{
//     console.log('uncaughtException');
//     console.log(code, arguments);
// });
// process.on('Signal',(code)=>{
//     console.log('Signal');
//     console.log(code, arguments);
// });

// console.log(process.argv);
// process.argv.forEach(function(val, index, array) {
//     console.log(index + ': ' + val);
// });
//
// // 获取执行路径
// console.log(process.execPath);
// 平台信息
// console.log(process.platform);
// console.log(process.cwd(), __dirname);
//
// // process.exit(128);
// process.nextTick(()=>{
//     console.log(1243);
// });
//
// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());