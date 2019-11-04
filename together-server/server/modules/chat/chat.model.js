const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  title: String,
  content: Array,
  feel: Number,
  isPublic: Boolean,
  isLocked: Boolean,
  wasTreated: Boolean
});

const ChatModel = mongoose.model("Chat", ChatSchema);

module.exports = ChatModel;
