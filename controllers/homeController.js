const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

const homeController = {
	
    getHome: function (req, res) {
		var email = req.params.email;
		
		db.findMany(Posts, {},function(err, results) {
			if(results != null) {
				User.findOne({email: email}, function(err, result) {
					if (result.online == true) {
						res.render('home', {details: results, emailUser: req.params.email});
					}
					else {
						res.render('error');
					}
				});
			}
			
			else if(results == null){
				res.render('error');
			}
		});
    },
	
	postHome: function (req, res) {
		
		var email = req.params.email;
		var itemname = req.body.itemname;
        var itemdesc = req.body.itemdesc;
        var price = req.body.price;
		var date = req.body.date;
		var highbid = req.body.highbid;
		var imgurl = '../images/' + req.body.imgurl;
		
		var today = new Date();
		var datenow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var thismonth = (today.getMonth()+1);
		var thisday = today.getDate();
		
		if (thismonth == date[5] + date[6] && thisday <= date[8] + date[9] ||
			thismonth < date[5] + date[6]) {	
			db.insertOne(Posts, {
				email: email,
				itemname: itemname,
				itemdesc: itemdesc,
				price: price,
				date: date,
				highbid: highbid,
				datenow: datenow,
				imgurl: imgurl
			});
			db.findMany(Posts, {}, function(err, results) {
				if(results != null) {
					res.redirect('/home/' + email);
				}
				
				else if(results == null){
					res.render('error');
				}
			});
		}
		
		else {
			res.redirect('/home/' + email);
		}
	}
}

module.exports = homeController;
