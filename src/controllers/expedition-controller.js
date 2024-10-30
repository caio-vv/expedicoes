
import Explorer from "../models/expedition-model.js";

export const store = async (req, res) => {
    try {
        const content = await Explorer.create(req.body);
        res.status(201).json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}