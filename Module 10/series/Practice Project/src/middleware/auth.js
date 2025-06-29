let jwt = require('jsonwebtoken')

module.exports = (req,res,next)=> {
    let Token = req.headers['token-key']
    jwt.verify(Token, "Secret-XYZ-123", (err,VerifiedToken)=> {
        if(err){
            res.status(401).json({status: "Please login first!", Token})
        }else{
            let UserId = VerifiedToken['data']
            req.headers.UserId = UserId;
            console.log(UserId)
            next()
        }
    })
}