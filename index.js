const express = require("express");
const mongoose = require("mongoose");

const app = express()

const Article = require("./models/Article");

mongoose.connect("mongodb+srv://omarkh3010:///@cluster0.laojrvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {

  console.log("Conected successfully")

}).catch((error) =>{

  console.log("error with conccteing with the Database", error)
});

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
});

app.get("/numbers", function name(req, res) {
  const num1 = req.params.number1
  const num2 = req.params.number2
  const total = Number(num1) + Number(num2);
  console.log(req.params);
  //res.send(`the number are: ${num1} / ${num2} , and the total is: ${total}`);
  //res.sendFile(__dirname + "/views/numbers.html");
  res.render("numbers.ejs", {
    name: "omar"
  })
});

//====== ARTICLES ENDPOINTS =======

app.post("/articles", async (req,res) => {

  const newArticle = new Article()
  newArticle.title = "my new article"
  newArticle.body = "this is ther body"
  newArticle.numberOfLikes = 100
  await newArticle.save()
  res.send("articles");
});


app.get("/articles", async (req, res) => {
	const articles = await Article.find();
	console.log("the articles are", articles);

	res.json(articles);
});


app.get("/showArticles", async (req, res) => {
	const articles = await Article.find();

	res.render("articles.ejs", {
		allArticles: articles,
	});
});

app.listen(3000, function name(params) {
  console.log ("i am listing in port 3000")
});
