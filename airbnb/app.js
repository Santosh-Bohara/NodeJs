const express = require("express");

const userRouter = require("./routes/userRouter");

const hostRouter = require("./routes/hostRouter");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(userRouter);

app.use(hostRouter);

app.get("/", (req, res, next) => {
  res.send(`
    <h1>Welcome to Airbnb Clone Application</h1>
    <a href="/add-home">Add Homes</a>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
