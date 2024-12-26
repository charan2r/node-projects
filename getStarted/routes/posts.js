const router = require("express").Router();
const Post = require("../model/post");


router.post("/newPosts", async (req, res) => {
    const { title, description } = req.body;
        
    const newPost = new Post({
        title: title,
        description: description
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
    
});

router.get("/getPosts", async(req,res)=>{
    const posts = await Post.find();
    res.json(posts);
});

router.get("/getPosts/:postid", async(req,res)=>{
    const _id = req.params.postid;
    const post = await Post.findById(_id);
    res.json(post);
});

router.patch("/update/:postid", async(req,res)=>{
    const _id = req.params.postid;
    const update = await Post.findByIdAndUpdate(_id,{$set:{description:req.body.description}});
    res.json(update);
});

router.delete("/deletePosts/:postid", async(req,res)=>{
    const _id = req.params.postid;
    await Post.findByIdAndDelete(_id);
    res.json({"status":"removed post"});
})

module.exports = router;
