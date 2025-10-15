const http = require("http");
const testingSyntax = require("./syntax");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  testingSyntax();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
