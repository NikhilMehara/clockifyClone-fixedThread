const jwt = require('jsonwebtoken');
require('dotenv').config();
const authentication =(req,res,next)=>{
    console.log(req.headers.authorization);
    if(!req.headers.authorization){
        return res.send("Login to see the content");
    }
   const user_token = req.headers.authorization;
   jwt.verify(user_token,process.env.SECRET,function(err,decoded){
    if(err){
        return res.send ('Please Login');
    }
    console.log(decoded);
    req.body.email=decoded.email;
    req.body.userId=decoded.userId;
    next();
   })
}

module.exports = authentication;