const userModel = require("../models/user");

const home = (req,res)=>{
    res.send("<h2>How are you? HOME</h2>")
}

const about = (req,res)=>{
    res.send("<h2>How are you? ABOUT </h2>")
}

const registration = async (req, res) => {
    try {
        const user = await new userModel({
            name: "EMAM MEHEDI",
            username: "ctgmehedi"
        }).save();

        res.json({
            user: {
                name: user.name,
                username: user.username
            },
        });
    } catch (err) {
        console.log(err);
    }
 };
  
  


module.exports = {
    home, 
    about,
    registration,
}