const nodemailer = require('nodemailer');

const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.titan.email",
        port: 25,
        secure: false,
        auth: {
            user: "inquary@mychair.shop",
            pass: "~E,8]B%T4ivL7'T"
        },tls: {
            rejectUnauthorized: false
        },
    }); 


    let mailOptions = {
        from: "inquary@mychair.shop",
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility