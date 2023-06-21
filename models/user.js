//Creates a user model  
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  }); 

const User = mongoose.model('User', userSchema);

module.exports = User;




