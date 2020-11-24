import mongoose from "mongoose";

export const schema = {
  title: {
    type: String,
    required: [true, "song name cannot be null"],
  },
  url: {
    type: String,
    unique: true,
    required: [true, "song url cannot be null"],
  },
  album: {
    type: String,
  },
  artist: {
    type: String,
  },
  rating: {
    type: Number,
  },
  favorite: {
    type: Boolean,
  },
};

const songSchema = new mongoose.Schema(schema);

export const Song = mongoose.model("song", songSchema);
