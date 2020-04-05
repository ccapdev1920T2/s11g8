const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

var mongoose = require('mongoose');

const postController = {

    getPost: function (req, res) {
		var id = mongoose.Types.ObjectId();
		var id = req.params._id;
		var email = req.params.email;
		
        Posts.findOne({_id: id}, function(err, results) {
			
			var details = {
				email: results.email,
				emailUser: results.email,
				itemname: results.itemname,
				itemdesc: results.itemdesc,
                price: results.price,
                date: results.date,
				highbidder: results.highbidder
			};
			
			res.render('view', details);
		});
    },
	
	postPost: function (req, res) {
		var email = req.params.email;
		var id = mongoose.Types.ObjectId();
		var id = req.params._id;
		var highbid = req.body.highbid;
		
		db.updateOne(Posts, {_id: id}, {price: highbid});
		
		db.updateOne(Posts, {_id: id}, {highbidder: email});
		
		Posts.findOne({_id: id}, function(err, results) {
			
			var details = {
				email: email,
				emailUser: results.email,
				itemname: results.itemname,
				itemdesc: results.itemdesc,
                price: results.price,
                date: results.date,
				highbidder: results.highbidder
			};
			res.render('view', details);
		});
	}
}

module.exports = postController;