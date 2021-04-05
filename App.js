if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

const express    = require('express'),
      bodyParser = require("body-parser"),
      app        = express();
const flash = require("connect-flash")
session = require("express-session");

// require routers
const indexRoute = require("./routers/index");

const port = process.env.PORT || 3000;

// configure packages
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(flash());
app.use(session({ cookie: { maxAge: 60000 }, 
  secret: 'alsana',
  resave: false, 
  saveUninitialized: false}));
  
app.use(function(req,res,next){
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});


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