/**
 * Created by Administrator on 2015/4/29.
 * 对权限进行控制
 */
var express = require('express');
var router = express.Router();


function isAdminLogined(req){
    return req.session.adminlogined;
}


router.get("/manage",function(req,res,next){
    if(isAdminLogined(req)){
        next();
    }else{
        res.redirect("/admin");
    }
});

router.get("/manage/*",function(req,res,next){
    if(isAdminLogined(req)){
        next();
    }else{
        res.redirect("/admin");
    }
});


module.exports = router;