const logicalSyntax = () => {
  let a = 10;
  if ((a = 5)) {
    console.log(a);
  } else {
    console.log("a is not 5");
  }
};

module.exports = logicalSyntax;
