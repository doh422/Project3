var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = mongoose.Schema({
	course_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
	user_ids: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

var Game = mongoose.model('Game', gameSchema);
module.exports = Game;