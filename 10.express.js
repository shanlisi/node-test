const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',function (req, res) {
    res.send('hello world')
});
app.post('/', function (req, res) {

});

const server = app.listen(8080, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://", host, port)
});