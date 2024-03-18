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
    req.session.isAuth = true; // Store the user's email in the session
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
