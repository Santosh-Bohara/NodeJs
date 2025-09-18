const sumRequestHadler = (req, res) => {
  console.log("Sum Request Handler", req.url);
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = +bodyObj.first + +bodyObj.second;
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
     <head><title>Calculator</title></head>
     <body>
      <h1>Your Sum is ${result}</h1>
      <a href="/">Go to Home</a>
     </body>
    </html>`);
    return res.end();
  });
};

exports.sumRequestHadler = sumRequestHadler;
