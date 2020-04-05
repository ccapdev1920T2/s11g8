
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

const profileController = {

    getProfile: function (req, res) {
		
        var email = req.params.email;
        var query = {email: req.params.email};
		
        var projection = 'fname email pnumber';
		
        db.findOne(User, query, projection, function(result) {
            if(result != null) {
				var details = {
					fname: result.fname,
					email: result.email,
					pnumber: result.pnumber
				};
				res.render('profile', details);
            }
			
			else if(result == null) {
				res.render('error');
			}
        });
    }
}

module.exports = profileController;
