const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.write("<h1>Welcome to Myntra</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to Men's Section</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to Women's Section</h1>");
    return res.end();
  } else if (req.url === "/kid") {
    res.write("<h1>Welcome to Kid's Section</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Welcome to Cart's Section</h1>");
    return res.end();
  }

  res.write(`
    <html>
    <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kid">Kid</a></li>
         <li><a href="/cart">cart</a></li>
      </ul>
    </nav>
  </head>
</body>
    </html>
    `);
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
