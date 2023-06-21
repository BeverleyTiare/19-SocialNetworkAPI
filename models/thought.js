//Creates a  model for thoughts  
const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./reaction');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    username: { type: String, required: true },
    reactions : [reactionSchema],
    createdAt: { type: Date, default: Date.now , get: (timestamp) => dateFormat(timestamp) }},
    { toJSON: { getters: true } } 
  );
  


thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
}); 

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;  






 
