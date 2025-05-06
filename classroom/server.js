const express = require("express");
const app = express();
const user = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = { 
  secret: "secretCode", 
  resave:false, 
  saveUninitialized: true
  };

app.use(session(sessionOptions));
app.use(flash());

app.use((Req,res,next) =>{
  res.locals.success = req.flash("success");
  res.locals.failure = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
   let {name ="anonymous"} = req.query;
   req.session.name =name;
   if(name ==="anonymous"){
    req.flash("error", "user not registered");
   } else{
    req.flash("success", "user registerd successfully");
   }
   res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", {name: req.session.name });
});

// app.get("/reqcount" , (req, res) =>{
//   if(req.session.count) {
//     req.session.count++;
//   } else{
//     req.session.count = 1;
//   }
//   res.send(`you sent a req ${req.session.count} times`);
// });

// app.get("/test" , (req, res) =>{
//   res.send("test successful");
// });


// app.use(cookieParser("secrectcode"));

// app.get("/getsignedCookie", (req, res) => {
//   res.cookie("made-in", "india", {signed:true});
//   res.send("Signed cookie sent");
// });

// app.get("/verify", (req, res) => {
//   console.log(req.signedCookies);
//   res.send("verify");
// });

// app.get("/getcookies", (req,res ) =>{
//     res.cookie("greet", "hello");
//     res.send("cookies");
// });

// app.get("/greet", (req, res) => {
//   let {name = "anonymous"} = req.cookies;
//   res.send(`Hi, ${name}`);
// });

// app.get("/", (req, res) =>{
//   console.dir(req.cookies);
//   res.send("hii");
// });

// app.use("/users", user);
// app.use("/posts", posts);

app.listen(3000, () => {
    console.log("server is working");
});
