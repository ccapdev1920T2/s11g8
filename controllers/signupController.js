const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const signupController = {

    getSignUp: function (req, res) {
        res.render('signup');
    },

    postSignUp: function (req, res) {
        var fname = req.body.fname;
        var email = req.body.email;
        var pw = req.body.pw;
		var pnumber = req.body.pnumber;

        db.insertOne(User, {
            fname: fname,
            email: email,
            pw: pw,
			pnumber: pnumber
        });

        res.redirect('/home/' + email);
    }

}

module.exports = signupController;
