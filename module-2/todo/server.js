const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/todos" && req.method === "GET") {
        res.end("All ToDos")
    }
    else if (req.url === "/todos/create-todo" && req.method === "POST") {
        res.end("ToDo Created")
    }
    else {
        res.end("Route not found")
    }

})

server.listen(5000, "127.0.0.1", () => {
    console.log("Server is listening on port 5000");
})