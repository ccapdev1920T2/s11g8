const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const logoutController = {

    getLogout: function (req, res) {
		var email = req.params.email;
		
		User.findOne({email: email}, function(err, result) {
			db.updateOne(User, {email: email}, {online: false});
		});
        res.render('logout');
    }
}

module.exports = logoutController;