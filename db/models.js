/*
Contains some Model modules that manipulate database collection data
*/

/*Connect to the database*/
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hireeasy_db')
const conn = mongoose.connection
conn.on('connected', () => {
  console.log('db connect success!')
})


//User Schema
const userSchema = mongoose.Schema({
  username: {type: String, required: true}, // UserName
  password: {type: String, required: true}, // Password
  type: {type: String, required: true}, // userType: jobSeeker/jobPoster
  avatar: {type: String}, // Avatar
  post: {type: String}, // position
  info: {type: String}, // personal info
  company: {type: String}, // company
  salary: {type: String} // salary
})
// Define Model
const UserModel = mongoose.model('user', userSchema) 
// Export Model
exports.UserModel = UserModel


// Define the chat collection
const chatSchema = mongoose.Schema({
  from: {type: String, required: true}, // Send user's id
  to: {type: String, required: true}, // Receiving user's id
  chat_id: {type: String, required: true}, // String composed of from and to
  content: {type: String, required: true}, // content
  read: {type:Boolean, default: false}, // Whether the message has been read
  create_time: {type: Number} // Creation time
})
// Define the chat model
const ChatModel = mongoose.model('chat', chatSchema) 
//Export  Model
exports.ChatModel = ChatModel