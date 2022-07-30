var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./folder/big.txt', 'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./folder/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', () => {
        res.end(err);
    });
}).listen(5005);