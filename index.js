const express = require("express");

const app = express()
app.use(express.json());

app.get("/hello", function name(req, res) {

  res.send("hello")
});

app.get("/hi", function name(req, res) {

  res.send("YO hi")
});

app.get("/sayhello", function name(req, res) {

console.log(req.body);
res.send(`Hello ${req.body.name}`);
});

app.get("/findsummation/:number1/:number2", function name(req, res) {
  const num1 = req.params.number1
  const num2 = req.params.number2
  const total = Number(num1) + Number(num2);
  console.log(req.params);
  res.send(`the number are: ${num1} / ${num2} , and the total is: ${total}`);
})

app.listen(3000, function name(params) {
  console.log ("i am listing in port 3000")
});
