const dotenv = require('dotenv');
dotenv.config();

// const test = process.env.TEST;

exports.index = async (req, res) => {
    res.send({status: "ok"});
};
