const http = require('http');
const url = require('url');


let server = http.createServer((req, res) => {
    let pathName = req.url;

    if (pathName == "/" || pathName == '/overview') {
        res.end("Hello World");
    } else {
        res.writeHead(404);
        res.end("Not found");
    }

});

let port = 8080
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});