const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req, "req");
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello Node js from http module");
});

const port = 3030;
server.listen(port, () => {
  console.log(`Server is listiening at port ${port}`);
});
