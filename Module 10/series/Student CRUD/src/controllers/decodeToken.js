const jwt = require('jsonwebtoken');
exports.DecodeToken = (req,res)=> {
    let {token_key} = req.headers;
    
    jwt.verify(token_key, "Secret-123-XYZ", (err,decoded)=> {
        if(err){
            res.status(401).json({status: "Invalid Token!"})
        }else{
            res.status(200).json({status: "Authorized!", data: decoded})
        }
    })
}