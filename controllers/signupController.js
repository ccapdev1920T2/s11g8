const { validationResult } = require('express-validator');

const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const bcrypt = require('bcrypt');

const signupController = {

    getSignUp: function (req, res) {
        res.render('signup');
	},
	
	getCheckEmail: function (req, res) {

		var email = req.query.email;
	
		db.findOne(User, {email: email}, 'email', function (result) {
			res.send(result);
		});
	},

    postSignUp: function (req, res) {
        var fname = req.body.fname;
        var email = req.body.email;
        var pw = req.body.pw;
		var cpw = req.body.cpw;
		var pnumber = req.body.pnumber;
		var i;
		var same = false;
		let hash = bcrypt.hashSync(pw, 10);
		
		if(pw != cpw) {
			res.render('signup');
		}
		
		else if (pw == cpw) {
			db.findMany(User, {}, function(err, results) {
				if(results != null) {
					for(i=0; i < results.length; i++) {
						if (email.localeCompare(results[i].email) == 0) {
							same = true;
							i = results.length;
						}
					}
			
					if (same == false) {
						db.insertOne(User, {
							fname: fname,
							email: email,
							pw: hash,
							pnumber: pnumber,
							online: true
						});
						res.redirect('/home/' + email);
					}
					
					else {
						res.render('signup');
					}
				}
			});
		}
		
	}

}

module.exports = signupController;
