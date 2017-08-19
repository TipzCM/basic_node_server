const http = require("http");
const port = 8000;

var requestHandler = (request, response) => {
    console.log(request.url);
    response.end("Hello world");
}

var server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log("got an error", err);
    }

    console.log("server is listening on " + port);
})