var fs = require('fs');

var roomsInfo = JSON.parse(fs. readFileSync('./localdata/rooms.json', 'utf-8'));

/*GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {roomsInfo});
};

module.exports = {
    rooms
};