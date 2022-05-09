const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for todo
const EventsSchema = new Schema({
  name: {
    type: String,
    requirjed: [true, "The todo text field is required"],
    trim: true,
  },
});

// Create model for todo
const Event = mongoose.model("Event", EventsSchema);

module.exports = Event;
