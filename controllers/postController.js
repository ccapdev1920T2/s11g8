const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

var mongoose = require('mongoose');

const postController = {

    getPost: function (req, res) {
		var id = mongoose.Types.ObjectId();
		var id = req.params._id;
		var email = req.params.email;
		
		var today = new Date();
		var thismonth = (today.getMonth()+1);
		var thisday = today.getDate();
		
        Posts.findOne({_id: id}, function(err, results) {
			
			var details = {
				id: id,
				email: email,
				emailUser: results.email,
				itemname: results.itemname,
				itemdesc: results.itemdesc,
                price: results.price,
                date: results.date,
				highbidder: results.highbidder,
				datenow: results.datenow,
				imgurl: results.imgurl
			};
			
			if (thismonth == results.date[5] + results.date[6] && thisday <= results.date[8] + results.date[9] ||
				thismonth < results.date[5] + results.date[6]) {
					
				if (results.highbidder == undefined) {
					if (results.email == email) {
						res.render('view_own', details);
					}
					
					else if (results.email != email) {
						res.render('view', details);
					}
				}
				
				else if (results.highbidder != undefined) {
					res.render('view', details);
				}
				
			}
			
			else {
				res.render('view_only', details);
			}
		});
    },
	
	postPost: function (req, res) {
		var email = req.params.email;
		var id = mongoose.Types.ObjectId();
		var id = req.params._id;
		var highbid = req.body.highbid;
		
		var today = new Date();
		var thismonth = (today.getMonth()+1);
		var thisday = today.getDate();
		
		db.updateOne(Posts, {_id: id}, {price: highbid});
		
		db.updateOne(Posts, {_id: id}, {highbidder: email});
		
		Posts.findOne({_id: id}, function(err, results) {
			
			var details = {
				id: id,
				email: email,
				emailUser: results.email,
				itemname: results.itemname,
				itemdesc: results.itemdesc,
                price: results.price,
                date: results.date,
				highbidder: results.highbidder,
				datenow: results.datenow,
				imgurl: results.imgurl
			};
			
			if (thismonth == results.date[5] + results.date[6] && thisday <= results.date[8] + results.date[9] ||
				thismonth < results.date[5] + results.date[6]) {
					
				if (results.highbidder == undefined) {
					if (results.email == email) {
						res.render('view_own', details);
					}
					
					else if (results.email != email) {
						res.render('view', details);
					}
				}
				
				else if (results.highbidder != undefined) {
					res.render('view', details);
				}
				
			}
			
			else {
				res.render('view_only', details);
			}
		});
	},
	
	getEditPost: function (req, res) {
		res.render('edit_post', {id: req.params.id});
	},
	
	editPost: function (req, res) {
		var id = mongoose.Types.ObjectId();
		var id = req.params._id;
		var itemname = req.body.itemname;
		var itemdesc = req.body.itemdesc;
		var price = req.body.price;
		var date = req.body.date;
		var imgurl = '../images/' + req.body.imgurl;
		
		var today = new Date();
		var thismonth = (today.getMonth()+1);
		var thisday = today.getDate();
		
		db.updateOne(Posts, {_id: id}, {itemname: itemname});
		
		db.updateOne(Posts, {_id: id}, {itemdesc: itemdesc});
		
		db.updateOne(Posts, {_id: id}, {price: price});
		
		db.updateOne(Posts, {_id: id}, {date: date});
		
		db.updateOne(Posts, {_id: id}, {imgurl: imgurl});
		
		Posts.findOne({_id: id}, function(err, results) {
			
			var details = {
				id: id,
				email: results.email,
				itemname: results.itemname,
				itemdesc: results.itemdesc,
                price: results.price,
                date: results.date,
				highbidder: results.highbidder,
				datenow: results.datenow,
				imgurl: results.imgurl
			};
			
			if (thismonth == results.date[5] + results.date[6] && thisday <= results.date[8] + results.date[9] ||
				thismonth < results.date[5] + results.date[6]) {
					
				if (results.highbidder == undefined) {
					res.render('view', details);
				}
				
				else if (results.highbidder != undefined) {
					res.render('view', details);
				}
				
			}
			
			else {
				res.render('view_only', details);
			}
		});
	}
}

module.exports = postController;
