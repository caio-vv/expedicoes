import express from "express"
import "dotenv/config"
import "./config/db.js"

import expedition_router from "./routes/expedition-route.js"
import explorer_router from "./routes/explorer-route.js"
import species_router from "./routes/species-route.js"

const app = express()
app.use(express.json())

app.use("/expedition", expedition_router)
app.use("/explorer", explorer_router)
app.use("/species", species_router)


app.listen(process.env.API_PORT, ()=> {console.log("servidor rodando")})