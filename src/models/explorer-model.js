import { Schema, model } from "mongoose";

const explorerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  fieldOfStudy: {
    type: String,
    required: true
  },
  expeditions: {
      type: [Schema.Types.ObjectId],
      ref: "Expedition",
      required: false
    }
});

const Explorer = model("Explorer", explorerSchema);

export default Explorer;