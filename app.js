var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')
const ShoppingItem = require('./ShoppingItem.js');
var app = express();
var jsonParser = bodyParser.json()
app.listen(3000, () => {
  console.log("Server running on port 3000");
 });

var shoppingList = [
  new ShoppingItem(1, "Macbook", 2000),
  new ShoppingItem(2, "Fantasy book", 30),
  new ShoppingItem(3, "Mouse", 35)
];

 app.get("/", (req, res, next) => {
  res.json(shoppingList);
 });

 app.post("/addItem", jsonParser, (req, res, next) => {
  console.dir(req.body);
  const item = req.body;

  shoppingList.push(item);

  res.json(shoppingList);
 });
