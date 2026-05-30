const express = require("express");
const path = require("path");
require('dotenv').config()
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const mongoose = require("mongoose");
const cookieParse = require("cookie-parser")
const {Blog} = require("./models/blogs")
const { checkForAuthCookie } = require("./middlewares/auth");

const app = express();
const PORT = process.env.PORT;
app.use(express.urlencoded({extended:false}))

mongoose.connect(process.env.MONGODB_URL).then((e) => {
  console.log("MongoDB is connected successfully");
});
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.static(path.resolve("./public")));
app.use(cookieParse())
app.use(checkForAuthCookie("token"))
app.use("/user", userRoute);  
app.use("/blog", blogRoute);  

app.get("/",async (req, res) => {
  const allBlogs = await Blog.find({})

  res.render("home",{
    user:req.user,
    blogs:allBlogs,
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});