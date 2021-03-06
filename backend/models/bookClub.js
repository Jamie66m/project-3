
const mongoose = require('mongoose')
const User = require('./user').schema
const Comment = require('./comment').schema


const schema = new mongoose.Schema({
  bookClubName: { type: String, required: true },
  descriptionBio: { type: String, required: true },
  adminUser: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  members: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }],
  joinRequests: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }],
  comments: [Comment]
  
})

module.exports = mongoose.model('BookClub', schema)
