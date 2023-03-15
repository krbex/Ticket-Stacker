import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
  flightId: {
    type: String,
    required: true,
  },
  firstClass: Boolean,
  depart: {
    type: String,
    required: true,
  },
  arrive: {
    type: String,
    required: true,
  },
  price: Number,
  demand: Boolean,
  watchers: Number,
  availability: Number,
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
