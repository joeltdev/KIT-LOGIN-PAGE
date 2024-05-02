const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const nocache = require("nocache");
const app = express();

// Set up EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Set up sessions
app.use(
  session({
    secret: "secret", // Change this to a more secure secret in production
    resave: false,
    saveUninitialized: true,
  })
);

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(nocache());

// Routes
app.get("/", (req, res) => {
  if (req.session.isAuth) {
    res.redirect("/home");
  } else {
    res.redirect("/login");
  }
});

app.get("/login", (req, res) => {
  if (req.session.isAuth) {
    res.redirect("/home");
  } else {
    res.render("login");
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "joelmathew@gmil.com" && password === "1234") {
    req.session.isAuth = true;
    res.redirect("/home");
  } else {
    res.redirect("/login");
  }
});

app.get("/home", (req, res) => {
  if (req.session.isAuth) {
    res.render("home");
  } else {
    res.redirect("/login");
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/login");
    }
  });
});

// Start server
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
