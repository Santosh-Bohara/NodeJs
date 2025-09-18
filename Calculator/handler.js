const { sumRequestHadler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
     <head><title>Calculator</title></head>
     <body>
      <h1>Welcome to the Calculator</h1>
      <a href="/calculator">Go to Calculator</a>
     </body>
    </html>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
     <head><title>Calculator</title></head>
     <body>
       <h1>Here is the  Calculator</h1>
       <form action="/calculator-result" method="POST">
       <input type="text" placeholder="First Num" name="first" />
       <input type="text" placeholder="Second Num" name="second" />
       <input type="submit" value="Sum">
       </form>
      </body>
    </html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculator-result" &&
    req.method === "POST"
  ) {
    return sumRequestHadler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
     <head><title>Calculator</title></head>
     <body>
      <h1>404 Page don't exist</h1>
      <a href="/">Go to Home</a>
     </body>
    </html>`);
  return res.end();
};

exports.requestHandler = requestHandler;
