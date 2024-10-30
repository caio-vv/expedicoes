import { Schema, model } from "mongoose";

const speciesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  discoveryLocation: {
    type: String,
    required: true
  },
  rarity: {
    type: Number,
    required: false
  },
  documented: {
     type: Boolean,
     default: false
    }
});

const Species = model("Species", speciesSchema);

export default Species;