let jwt = require('jsonwebtoken')

exports.TokenVerify = (req,res,next)=> {
    let Token = req.headers['my-token']
    jwt.verify(Token, "secret-123-xyz", (err,VerifiedToken)=> {
        if(err){
            res.status(401).json({status: "Please login first!", Token})
        }else{
            let TokenData = VerifiedToken['data']
            req.headers.TokenData = TokenData;
            next()
        }
    })
}