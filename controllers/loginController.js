const { validationResult } = require('express-validator');

const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

const bcrypt = require('bcrypt');

const loginController = {

    getLogin: function (req, res) {
        res.render('login');
		
		db.findOne(User, function(err, result) {
			if(result == null) {
				db.insertMany(User, [
					{	fname: "Paolo Mico",
						email: "paolo_mico@dlsu.edu.ph",
						pw: bcrypt.hashSync("yeet", 10),
						pnumber: 09345678921
					},
					{	fname: "Lanz Ling",
						email: "lanz_ling@dlsu.edu.ph",
						pw: bcrypt.hashSync("reet", 10),
						pnumber: 09112475840
					},
					{	fname: "Beatrice Teope",
						email: "ma_carol_teope@dlsu.edu.ph",
						pw: bcrypt.hashSync("reet", 10),
						pnumber: 09676767673
					},
					{	fname: "Mig Brosoto",
						email: "mig_franz_brosoto@dlsu.edu.ph",
						pw: bcrypt.hashSync("reet", 10),
						pnumber: 09124750483
					}
				]);
				
				db.insertMany(Posts, [
					{	email: "paolo_mico@dlsu.edu.ph",
						itemname: "GTX 1060",
						itemdesc: "Tis a GPU from NVIDIA",
						price: 4000,
						date: "2020-07-18",
						datenow: "2020-01-19",
						imgurl: "../images/1060.jpg"
					},
					{	email: "paolo_mico@dlsu.edu.ph",
						itemname: "GTX 1070",
						itemdesc: "Tis ANOTHER GPU from NVIDIA",
						price: 8000,
						date: "2020-09-18",
						datenow: "2020-01-20",
						imgurl: "../images/1070.jpg"
					},
					{	email: "paolo_mico@dlsu.edu.ph",
						itemname: "RX 580",
						itemdesc: "Tis a GPU from AMD",
						price: 10000,
						date: "2020-06-20",
						datenow: "2020-01-21",
						imgurl: "../images/580.png"
					},
					{	email: "paolo_mico@dlsu.edu.ph",
						itemname: "Ryzen 3 1200",
						itemdesc: "Tis a CPU from AMD",
						price: 2500,
						date: "2020-05-30",
						datenow: "2020-01-22",
						imgurl: "../images/r3_1200.jpg"
					},
					{	email: "paolo_mico@dlsu.edu.ph",
						itemname: "i9 9900K",
						itemdesc: "Tis a CPU from Intel",
						price: 20000,
						date: "2020-10-20",
						datenow: "2020-01-23",
						imgurl: "../images/i9_9900k.jpg"
					},
					{	email: "lanz_ling@dlsu.edu.ph",
						itemname: "Redragon K552",
						itemdesc: "This is a Mechanical Keyboard with Outemu Blue Switches",
						price: 1200,
						date: "2020-07-18",
						datenow: "2020-02-01",
						imgurl: "../images/redragon.jpg"
					},
					{	email: "lanz_ling@dlsu.edu.ph",
						itemname: "Redragon M711 Cobra",
						itemdesc: "This is a Mouse from Redragon",
						price: 400,
						date: "2020-07-19",
						datenow: "2020-02-02",
						imgurl: "../images/cobra.jpg"
					},
					{	email: "lanz_ling@dlsu.edu.ph",
						itemname: "i5 8400",
						itemdesc: "Tis a CPU from Intel",
						price: 7500,
						date: "2020-07-20",
						datenow: "2020-02-03",
						imgurl: "../images/i5_8400.jpg"
					},
					{	email: "lanz_ling@dlsu.edu.ph",
						itemname: "Iphone 7 128GB",
						itemdesc: "This is a phone from Apple",
						price: 15000,
						date: "2020-07-21",
						datenow: "2020-02-04",
						imgurl: "../images/iphone7.jpg"
					},
					{	email: "lanz_ling@dlsu.edu.ph",
						itemname: "Jabra Elite 65t",
						itemdesc: "This is a Truly Wireless Earbuds from Jabra",
						price: 6500,
						date: "2020-07-22",
						datenow: "2020-02-05",
						imgurl: "../images/jabra65.jpg"
					},
					{	email: "ma_carol_teope@dlsu.edu.ph",
						itemname: "Shirt (XS)",
						itemdesc: "This is an extra small Shirt",
						price: 50,
						date: "2020-09-18",
						datenow: "2020-03-01",
						imgurl: "../images/shirt.jpg"
					},
					{	email: "ma_carol_teope@dlsu.edu.ph",
						itemname: "Shirt (S)",
						itemdesc: "This is a small Shirt",
						price: 150,
						date: "2020-09-19",
						datenow: "2020-03-02",
						imgurl: "../images/shirt.jpg"
					},
					{	email: "ma_carol_teope@dlsu.edu.ph",
						itemname: "Shirt (M)",
						itemdesc: "This is a medium Shirt",
						price: 250,
						date: "2020-09-20",
						datenow: "2020-03-03",
						imgurl: "../images/shirt.jpg"
					},
					{	email: "ma_carol_teope@dlsu.edu.ph",
						itemname: "Shirt (L)",
						itemdesc: "This is a large Shirt",
						price: 350,
						date: "2020-09-21",
						datenow: "2020-03-04",
						imgurl: "../images/shirt.jpg"
					},
					{	email: "ma_carol_teope@dlsu.edu.ph",
						itemname: "Shirt (XL)",
						itemdesc: "This is an extra large Shirt",
						price: 450,
						date: "2020-09-22",
						datenow: "2020-03-05",
						imgurl: "../images/shirt.jpg"
					},
					{	email: "mig_franz_brosoto@dlsu.edu.ph",
						itemname: "Adidas Men's X 19.1",
						itemdesc: "This is an indoor soccer shoes",
						price: 4000,
						date: "2020-09-18",
						datenow: "2020-03-01",
						imgurl: "../images/adidas_19_1.jpg"
					},
					{	email: "mig_franz_brosoto@dlsu.edu.ph",
						itemname: "Soccer Ball",
						itemdesc: "This is a Soccer Ball used for Soccer/Football",
						price: 500,
						date: "2020-09-19",
						datenow: "2020-03-02",
						imgurl: "../images/ball.jpg"
					},
					{	email: "mig_franz_brosoto@dlsu.edu.ph",
						itemname: "Iphone 6 32GB",
						itemdesc: "This is a phone from Apple",
						price: 9000,
						date: "2020-09-20",
						datenow: "2020-03-03",
						imgurl: "../images/iphone6.jpg"
					},
					{	email: "mig_franz_brosoto@dlsu.edu.ph",
						itemname: "Logitech G502",
						itemdesc: "This is a mouse from Logitech",
						price: 3000,
						date: "2020-09-21",
						datenow: "2020-03-04",
						imgurl: "../images/g502.jpg"
					},
					{	email: "mig_franz_brosoto@dlsu.edu.ph",
						itemname: "Ducky One 2 Mini",
						itemdesc: "This is a mechanical keyboard from Ducky that has Cherry MX Reds",
						price: 5000,
						date: "2020-09-22",
						datenow: "2020-03-05",
						imgurl: "../images/ducky.jpg"
					}
				]);
			}
		});
	},

	getCheckAccount: function (req, res) {

		var email = req.query.email;
	
		db.findOne(User, {email: email}, 'email', function (result) {
			res.send(result);
		});
	},

    postLogin: function (req, res) {
		var email = req.body.email;
		var pw = req.body.pw;
		
		User.findOne({email: email}, function(err, results) {
			var fname = results.fname;
			var pnumber = results.pnumber;
			var cpw = results.pw;
			
			if(bcrypt.compareSync(pw, cpw)) {
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
				
				db.updateOne(User, {email: email}, {online: true});
				res.redirect('/home/' + email);
			}
			
			else {
				res.render('login');
			}
		});
	}
}

module.exports = loginController;
