const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home Page");
  } else if (url === "/project") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Project Page");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("This page is not found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is now listiening to port ${port}.`);
});
