const sendMail = (req, res) => {
    console.log('message: ' + req.body.message);
    
    res.status(200).json({mail: 'sended'});
};

module.exports = sendMail;