const express    = require('express'),
      bodyParser = require("body-parser"),
      app        = express();

// require routers
const indexRoute = require("./routers/index");

const port = 3000;

// configure packages
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//-------------------------------
//            Routes
//-------------------------------
app.use(indexRoute);

app.get("*", (req ,res) => {
  res.redirect("/");
});

// local listener
app.listen(port, () => {
  console.log(`Alsana app listening at http://localhost:${port}`);
})