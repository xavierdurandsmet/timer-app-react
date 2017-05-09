const nodemailer = require('nodemailer');

module.exports = {
    sendMail: function (receiverInfo, token) {

        console.log('hit the sendMail');

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'xavier.durand-smet@hec.edu',
                pass: 'cFFAgaDL92!'
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Ze mail server 👻" <ze@mailserver.com>', // sender address
            to: receiverInfo.mailAddress, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world ?', // plain text body
            html: '<p>Please click on url below to register</p><br><a href="http://localhost:3000/authenticate/?token='+token+'">CLICK HERE</a>'
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    }
}