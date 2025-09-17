const http = require("http");

// function requestListener(req, res) {
//   console.log(req);
// }
const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method, req.headers);
  // process.exit(); // Exit after logging the request

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello from Node.js server!</h1>"); // Write response body
  res.end(); // End the response
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
