/*  GET homepage */

const index = (req, res, next) => {
    res.render('index');
};
module.exports = {
    index
};