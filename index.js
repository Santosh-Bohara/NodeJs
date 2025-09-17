// console.log("hello world");

// const fs = require("fs");

// fs.writeFile("output.txt", "hello world", (err) => {
//   if (err) {
//     console.log("Error occurred", err);
//   } else console.log("File written successfully");
// });

const fs = require("fs");
fs.writeFile("output1.txt", "hello world", (err) => {
  if (err) {
    console.log("Error occurred", err);
  } else console.log("File written successfully");
});
