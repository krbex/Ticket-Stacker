import Flight from "../models/Flight.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js";

// READ
export const getTickets = async (req, res) => {
  try {
    const ticket = await Ticket.find();
    res.status(200).json(ticket);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getFlights = async (req, res) => {
  try {
    const { flightId } = req.params;
    const flight = await Flight.find({ flightId });
    res.status(200).json(flight);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
