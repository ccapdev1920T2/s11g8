
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
	itemname: {
        type: String,
        required: true
    },
    itemdesc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
	date: {
        type: String,
        required: true
    },
	highbidder: {
        type: String,
        required: false
    },
	imgurl: {
		type: String,
		required: false
	}
});

// exports a mongoose.model object based on `UserSchema` (defined above)
// when another script exports from this file
// This model executes CRUD operations
// to collection `users` -> plural of the argument `User`
module.exports = mongoose.model('Posts', PostSchema);
