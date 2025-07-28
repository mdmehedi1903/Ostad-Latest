const jwt = require('jsonwebtoken');
exports.EncodeToken=(req,res)=> {
    let PayLoad = {
        exp: Math.floor(Date.now()/1000) + (5*60),
        data: {Name: "Emam Mehedi", City: "Dhaka", admin: true
        }
    }

    let token = jwt.sign(PayLoad, "Secret-123-XYZ")
    res.send(token)
}



