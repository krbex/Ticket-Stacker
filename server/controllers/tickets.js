import Flight from "../models/Flight.js";
import Ticket from "../models/Ticket.js";

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

// UPDATE
export const watchTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const ticket = await Ticket.findById(id);
    const isWatched = flight.watched.get(userId);

    if (isWatched) {
      ticket.watchers.delete(userId);
    } else {
      ticket.watchers.set(userId, true);
    }

    const watchedTicket = await Ticket.findByIdAndUpdate(
      id,
      { watches: ticket.watchers },
      { new: true }
    );

    res.status(200).json(watchedTicket);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
