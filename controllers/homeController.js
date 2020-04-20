
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

const homeController = {
	
    getHome: function (req, res) {
		
		db.findMany(Posts, {},function(err, results) {
			if(results != null) {
				res.render('home', {details: results, emailUser: req.params.email});
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
}

module.exports = homeController;
