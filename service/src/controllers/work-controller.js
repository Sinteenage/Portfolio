const works = require('../models/works');

const getWurks = (req, res) => {
    res.status(200).json(works);
};

module.exports = getWurks;