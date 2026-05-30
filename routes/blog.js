const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");
const {Blog} = require("../models/blogs")
const {Comment} = require("../models/comments")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage })



router.get("/add-new", (req, res) => {
  return res.render("addBlogs", {
    user: req.user,
  });
});


router.get("/:id",async (req,res)=>{
  const blog = await Blog.findById(req.params.id).populate("createdBy")
  const comments = await Comment.find({blogId:req.params.id}).populate("createdBy")
  // console.log(comment);
  
  return res.render("blog",{
    user:req.user,
    blog,
    comments
  })
})

router.post("/comment/:blogId",async(req,res)=>{
  await Comment.create({
    content:req.body.content,
    blogId:req.params.blogId,
    createdBy:req.user._id
  })
  
  return res.redirect(`/blog/${req.params.blogId}`)
})
// console.log(req.body);
router.post("/", upload.single("coverImage"),async (req,res) => {
    const {title,body}=req.body;
    const blog = await Blog.create({
        title,
        body,
        coverImageUrl: `/uploads/${req.file.filename}`,
        createdBy:req.user._id,
    })
    
  return res.redirect(`/blog/${blog._id}`);
});


module.exports = router;
