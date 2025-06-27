const jwt = require('jsonwebtoken');
module.exports = (req,res,next)=>{
    
    let {token_key} = req.headers;
    
    jwt.verify(token_key, "Secret-123-XYZ", (err,decoded)=> {
        if(err){
            res.status(401).json({status: "Invalid Token!"})
        }else{
            next()
        }
    })

}