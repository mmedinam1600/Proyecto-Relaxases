var express = require("express"); 

var router = express.Router();

//localhost:8080/users/
router.get("/",function(req,res){

    res.render("users/home");

});

module.exports = router;