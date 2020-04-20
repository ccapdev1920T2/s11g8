
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
	datenow: {
		type: String,
		required: false
	},
	imgurl: {
		type: String,
		required: false
	}
});

module.exports = mongoose.model('Posts', PostSchema);
