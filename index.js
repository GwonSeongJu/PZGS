const express = require("express");
const app = express();
const path = require("path");

//view engine
app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("index.html");
});

app.listen(3000, function() {
  console.log("Server On!");
});
