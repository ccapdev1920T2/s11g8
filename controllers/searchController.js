
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

const homeController = {
	
    getSearch: function (req, res) {
		
		db.findMany(Posts, {},function(err, results) {
			if(results != null) {
				User.findOne({email: req.params.email}, function(err, result) {
					if (result.online == true) {
						res.render('search', {details: results, emailUser: req.params.email});
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
	
	postSearch: function (req, res) {
		var search = req.body.search;
		var searched = [];
		
		db.findMany(Posts, {},function(err, results) {
			if(results != null) {
				if (search != null) {
					for(x = 0; x < results.length; x++) {
						if (search == results[x].itemname || results[x].itemname.startsWith(search) || results[x].itemname.endsWith(search) ||
							search.toUpperCase() == results[x].itemname.toUpperCase() || search.toLowerCase() == results[x].itemname.toLowerCase() ||
							(results[x].itemname.toUpperCase()).startsWith(search.toUpperCase()) || (results[x].itemname.toUpperCase()).endsWith(search.toUpperCase()) ||
							(results[x].itemname.toLowerCase()).startsWith(search.toLowerCase()) || (results[x].itemname.toLowerCase()).endsWith(search.toLowerCase())) {
							searched.push(results[x]);
						}
					}
				}
				res.render('search', {details: searched, emailUser: req.params.email});
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
