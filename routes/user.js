const { Router } = require("express");
const router = Router();
const User = require("../models/user");

router.get("/signin", (req, res) => {
  
  res.render("signin");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/signout",(req,res)=>{
  res.clearCookie("token").redirect("/")
})

router.post("/signup",async (req, res) => {
  const { fullName, email, password } = req.body;
  const user = await User.findOne({email:email})
  if(user){
    return res.render("signup",{error:"User already exist with this email."})
  }
  else{
    await User.create({
      fullName,email,password
    })
  }
  return res.redirect("/user/signin")
});
router.post("/signin",async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await User.matchedPasswordAndGenerateToken(email,password)
    
    return res.cookie('token',token).redirect("/")
  } catch (error) {
    return res.render("signin",{
      error:"Incorrect credential check and retry"
    })
    
  }
});

module.exports = router;
