var fs = require('fs');

var mealsInfo = JSON.parse(fs. readFileSync('./data/meals.json', 'utf-8'));

/*GET meals view */
const meals = (req, res) => {
    res.render('meals', {mealsInfo});
};

module.exports = {
    meals
};