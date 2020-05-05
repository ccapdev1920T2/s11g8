var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    },
	pnumber: {
        type: Number,
        required: true
    },
	rate: {
		onestar: {
			type: Number,
			default: 0
		},
		twostar: {
			type: Number,
			default: 0
		},
		threestar: {
			type: Number,
			default: 0
		},
		fourstar: {
			type: Number,
			default: 0
		},
		fivestar: {
			type: Number,
			default: 0
		},
		ratecount: {
			type: Number,
			default: 0
		},
		rateavg: {
			type: Number,
			default: 0
		}
	},
	profPic: {
		type: String,
		default: '/images/egg.jpg'
	},
	backPic: {
		type: String,
		default: '/images/gray.jpg'
	},
	online: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('User', UserSchema);
