var request = require('request');
var bodyParser = require('body-parser');

module.exports.getShots = function(req, res) {

    request('http://api.dribbble.com/v1/shots?access_token=2b1bda62785d323950b3a26829122a217d440ae6ddc931879f8fae57feb7d9a7',
        function(error, response, body) {
            if (!error && response.statusCode == 200) {

                res.json(body);
            }
        })
};


module.exports.getAnimated = function(req, res) {

    request('http://api.dribbble.com/v1/shots?list=animated&access_token=2b1bda62785d323950b3a26829122a217d440ae6ddc931879f8fae57feb7d9a7',
        function(error, response, body) {
            if (!error && response.statusCode == 200) {

                res.json(body);
            }
        })
};

module.exports.getDebuts = function(req, res) {

    request('http://api.dribbble.com/v1/shots?list=debuts&access_token=2b1bda62785d323950b3a26829122a217d440ae6ddc931879f8fae57feb7d9a7',
        function(error, response, body) {
            if (!error && response.statusCode == 200) {

                res.json(body);
            }
        })
};
