
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

const homeController = {
	
    getHome: function (req, res) {
		
		db.findMany(Posts, {},function(err, results) {
			if(results != null) {
				
				
/*				var arrays = {
					details: [
						{	
							itemname: results[0].itemname,
							price: results[0].price,
							date: results[0].date,
							email: req.params.email,
							_id: results[0]._id
						},
						{	
							itemname: results[1].itemname,
							price: results[1].price,
							date: results[1].date,
							email: req.params.email,
							_id: results[1]._id
						}
					]
				}
				
				res.render('home', arrays);*/
				
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
		var imgurl = req.body.imgurl;
		
		db.insertOne(Posts, {
			email: email,
            itemname: itemname,
            itemdesc: itemdesc,
            price: price,
			date: date,
			highbid: highbid,
			imgurl: imgurl
        });
		
		db.findMany(Posts, {},function(err, results) {
			if(results != null) {
				res.redirect('/home/' + email);
			}
			
			else if(results == null){
				res.render('error');
			}
		});
	}
}

// exports the object `controller` (defined above)
// when another script exports from this file
module.exports = homeController;
