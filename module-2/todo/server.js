const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Welcome to to do server")
})

server.listen(5000, "127.0.0.1", () => {
    console.log("Server is listening on port 5000");
})