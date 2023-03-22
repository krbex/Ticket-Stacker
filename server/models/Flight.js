import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema(
  {
    flightId: {
      type: String,
      required: true,
      unique: true,
    },
    departLocation: String,
    arriveLocation: String,
    price: Number,
    watchers: Number,
    seatsAvailable: Number,
  },
  { timestamps: true }
);

const Flight = mongoose.model("Flight", FlightSchema);

export default Flight;
