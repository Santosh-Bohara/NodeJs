const http = require("http");

// function requestListener(req, res) {
//   console.log(req);
// }
const server = http.createServer((req, res) => {
  console.log(req);
  process.exit(); // Exit after logging the request
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
