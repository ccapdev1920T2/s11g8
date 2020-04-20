
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

const profile_viewController = {

    getviewProfile: function (req, res) {
		var email = req.params.email;
		var query = {email: req.params.email};
		
        var projection = 'fname email pnumber rate profPic backPic';
		
        db.findOne(User, {email: email}, projection, function(result) {
            if(result != null) {
				Posts.findOne({email: email}, function(err, results) {
					if(results != null) {
						db.findMany(Posts, query,function(err, resultz) {
							var details = {
								fname: result.fname,
								pnumber: result.pnumber,
								itemname: results.itemname,
								price: results.price,
								date: results.date,
								_id: results._id,
								rateavg: result.rate.rateavg,
								ratecount: result.rate.ratecount,
								email: email,
								profPic: result.profPic,
								backPic: result.backPic,
								postdetails: resultz
							};
							res.render('profile_view', details);
						});
					}
					
					else if(results == null){
						res.render('error');
					}
				});
            }
			
			else if(result == null) {
				res.render('error');
			}
        });
    },
	
	getRate: function (req, res) {
		res.render('rate', {email: req.params.email});
	},
	
	postRate: function (req, res) {
		var rate = req.body.rate;
		var email = req.params.email;
		
		var projection = 'fname email pnumber rate profPic backPic';
		
		 db.findOne(User, {email: email}, projection, function(result) {
			if(result != null) {
				var fivestar = result.rate.fivestar;
				var fourstar = result.rate.fourstar;
				var threestar = result.rate.threestar;
				var twostar = result.rate.twostar;
				var onestar = result.rate.onestar;
				var ratecount = result.rate.ratecount;
				var rateavg = result.rate.rateavg;
				
				if (rate == 5) {
					fivestar = fivestar + 1;
					ratecount = ratecount + 1;
					db.updateOne(User, {email: email}, {"rate.fivestar": fivestar});
					db.updateOne(User, {email: email}, {"rate.ratecount": ratecount});
				}
				
				else if (rate == 4) {
					fourstar = fourstar + 1;
					ratecount = ratecount + 1;
					db.updateOne(User, {email: email}, {"rate.fourstar": fourstar});
					db.updateOne(User, {email: email}, {"rate.ratecount": ratecount});
				}
				
				else if (rate == 3) {
					threestar = threestar + 1;
					ratecount = ratecount + 1;
					db.updateOne(User, {email: email}, {"rate.threestar": threestar});
					db.updateOne(User, {email: email}, {"rate.ratecount": ratecount});
				}
				
				else if (rate == 2) {
					twostar = twostar + 1;
					ratecount = ratecount + 1;
					db.updateOne(User, {email: email}, {"rate.twostar": twostar});
					db.updateOne(User, {email: email}, {"rate.ratecount": ratecount});
				}
				
				else if (rate == 1) {
					onestar = onestar + 1;
					ratecount = ratecount + 1;
					db.updateOne(User, {email: email}, {"rate.onestar": onestar});
					db.updateOne(User, {email: email}, {"rate.ratecount": ratecount});
				}
				
				rateavg = ((fivestar*5) + (fourstar*4) + (threestar*3) + (twostar*2) + (onestar*1)) / ratecount;
				db.updateOne(User, {email: email}, {"rate.rateavg": rateavg});
				
				res.render('rate', {email: req.params.email});
			}
			
			else if(result == null) {
				res.render('error');
			}
		 });
	}
}

module.exports = profile_viewController;
