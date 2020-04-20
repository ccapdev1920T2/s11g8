
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

const profileController = {

    getProfile: function (req, res) {
		
        var email = req.params.email;
        var query = {email: req.params.email};
		
        var projection = 'fname email pnumber rate profPic backPic';
		
        db.findOne(User, query, projection, function(result) {
            if(result != null) {
				db.findMany(Posts, query,function(err, results) {
					var details = {
						fname: result.fname,
						email: result.email,
						pnumber: result.pnumber,
						rateavg: result.rate.rateavg,
						ratecount: result.rate.ratecount,
						profPic: result.profPic,
						backPic: result.backPic,
						postdetails: results
					};
					res.render('profile', details);
				});
            }
			
			else if(result == null) {
				res.render('error');
			}
        });
    },
	
	getEditProfile: function (req, res) {
		res.render('edit_profile', {email: req.params.email});
	},
	
	editProfile: function (req, res) {
		var email = req.params.email;
		var fname = req.body.fname;
		var pnumber = req.body.pnumber;
		var pw = req.body.pw;
		var profPic = '/images/' + req.body.profPic;
		var backPic = '/images/' + req.body.backPic;
		var query = {email: req.params.email};
		
        var projection = 'fname email pnumber rate';
		
		db.updateOne(User, {email: email}, {fname: fname});
		
		db.updateOne(User, {email: email}, {pnumber: pnumber});
		
		db.updateOne(User, {email: email}, {pw: pw});
		
		db.updateOne(User, {email: email}, {profPic: profPic});
		
		db.updateOne(User, {email: email}, {backPic: backPic});
		
		db.findOne(User, query, projection, function(result) {
            if(result != null) {
				res.redirect('/profile/' + result.email);
            }
			
			else if(result == null) {
				res.render('error');
			}
        });
	}
}

module.exports = profileController;
