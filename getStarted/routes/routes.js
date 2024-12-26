const router = require("express").Router();
const Post = require("../model/post");

router.get('/ping',(req,res) => {
    res.json({Response:"hey"});
});


router.post('/new',(req,res) => {
    const request = req.body
    res.json(request);
    if(request.ping){
        res.json(request);
    }
    else{
        res.status(400);
    }
});

router.patch("/update", (req,res) => {
    const request = req.body
    if(request._id = "ping"){
        res.json({Response:"updated"});
    }
    else{
        res.status(400);
    }

});


module.exports = router;
