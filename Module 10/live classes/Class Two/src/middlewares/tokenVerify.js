let jwt = require('jsonwebtoken')

exports.TokenVerify = (req,res,next)=> {
    let Token = req.headers['token-key']
    jwt.verify(Token, "Secret-XYZ-123", (err,VerifiedToken)=> {
        if(err){
            res.status(401).json({status: "Please login first!", Token})
        }else{
            let TokenData = VerifiedToken['data'][0]
            req.headers.TokenData = TokenData;
            console.log(TokenData)
            next()
        }
    })
}