
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Posts = require('../models/PostModel.js');

const profile_viewController = {

    getviewProfile: function (req, res) {
		var emailUser = req.params.emailUser;
		
        var projection = 'fname email pnumber';
		
        db.findOne(User, {emailUser: emailUser}, projection, function(result) {
            if(result != null) {
				Posts.findOne({emailUser: emailUser}, function(err, results) {
					if(results != null) {
						var details = {
							fname: result.fname,
							pnumber: result.pnumber,
							itemname: results.itemname,
							price: results.price,
							date: results.date,
							_id: results._id
						};
						res.render('profile_view', details);
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
    }
}

module.exports = profile_viewController;
