const http = require("http");
const fs = require("fs");

// function requestListener(req, res) {
//   console.log(req);
// }
const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(req.url, req.method, req.headers);
  console.log(req.url, req.method);
  // process.exit(); // Exit after logging the request

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome!</h1>"); // Write response body
    res.write("<body>");
    res.write("<h1>Enter Your Details</h1>");

    res.write('<form action="/submit" method="POST">');
    res.write('<input type="text" name="username" placeholder="Username"><br>');
    res.write('<label for "male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for "female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write("<input type='submit' value='submit'/> <br>");
    res.write("</form>");

    res.write("</body>");

    return res.end();
  } else if (req.url.toLocaleLowerCase === "/submit" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });

    fs.writeFileSync("user.txt", "sample data");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Chectout our product !</h1>"); // Write response body

    return res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
