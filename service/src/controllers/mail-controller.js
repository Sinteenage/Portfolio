const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const sendMail = (req, res) => {
    
    const transporter = nodemailer.createTransport({
        host: 'mail.dkenev.com',
        port: process.env.POST_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: `${req.body.email}`,
        to: 'main@dkenev.com',
        subject: `${req.body.name}`,
        text: `${req.body.message}`,
    };

    transporter.sendMail(mailOptions, (error) => {
        res.json({mail: 'sended', error});
    });
};

module.exports = sendMail;