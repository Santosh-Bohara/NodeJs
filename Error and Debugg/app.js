const http = require("http");
const testingSyntax = require("./syntax");
const runtime = require("./runtime");
const logicalSyntax = require("./logical");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  testingSyntax();
  runtime();
  logicalSyntax();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
