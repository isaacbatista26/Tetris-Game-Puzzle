const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    nickname: String,
    level: Number,
    record: Number,
    email: String,
    password: String
}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;