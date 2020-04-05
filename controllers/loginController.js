
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const loginController = {

    getLogin: function (req, res) {
        res.render('login');
    },
	
    postLogin: function (req, res) {
		var email = req.body.email;
		var pw = req.body.pw;
		
		User.findOne({email: email}, function(err, results) {
			var fname = results.fname;
			var pnumber = results.pnumber;
			var cpw = results.pw;
			
			if(pw != cpw) {
				res.render('error');
			}
			
			else {
				var details = {
					fname: fname,
					email: email,
					pnumber: pnumber
				};
				
				if(err) {
					console.log(err);
					return res.status(500).send();
				}
				
				if(!User) {
					res.render('error');
				}
				
				res.redirect('/home/' + email);
			}
		});
    }
}

module.exports = loginController;
