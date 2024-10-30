import Expedition from "../models/expedition-model.js";
import Explorer from "../models/explorer-model.js";
import Species from "../models/species-model.js";

export const store = async (req, res) => {
    try {
      const { location, date, participants, species } = req.body;


      const expedition = await Expedition.create({
          location,
          date,
        participants,
        species,
      });
  
      const part = await Explorer.findById(participants).exec();
      part.participants.push(participants._id);
      part.save();
  
      const spe = await Species.findById(species).exec();
      spe.speciesFound.push(species._id);
      spe.save();
  
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  