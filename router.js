var express = require("express");
var router = express.Router();
router.use("/test",function(req,res){
    res.send("hello world!!");
    res.end();
})
router.use("/list",function(req,res){
    res.send("hello world!!");
    res.end();
})

module.exports = router;
