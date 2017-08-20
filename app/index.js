const http = require("http")
const express = require('express')
const path = require('path')
const port = 8000

var app = express()

var public = "D:/Dialogs/html/build/dist"

app.use('/', express.static(public))

app.get('/', (request,response) => {
    response.sendFile(path.join(public + "/index.html"))
})


app.listen(port, (err) => {
    if (err) {
        return console.log('some error', err)
    }

    console.log('server is listening on port ' + port)
})

// var requestHandler = (request, response) => {
//     console.log(request.url);
//     response.end("Hello world");
// }

// var server = http.createServer(requestHandler);

// server.listen(port, (err) => {
//     if (err) {
//         return console.log("got an error", err);
//     }

//     console.log("server is listening on " + port);
// })