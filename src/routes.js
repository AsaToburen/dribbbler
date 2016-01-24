var path = require('path');
var controller = require('./controllers/dribbble.controller.js');

module.exports = function(app) {

    app.get('/api/shots', controller.getShots);
    app.get('/api/animated', controller.getAnimated);
    app.get('/api/debuts', controller.getDebuts);


    app.get('*', function(req, res) {
        res.sendFile('index.html', {
            root: path.join(__dirname, '../public')
        });
    });
};
