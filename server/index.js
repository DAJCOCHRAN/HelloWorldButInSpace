import express from "express";
import { issCurrentLocation } from "./iss/iss.js";

const PORT = 8000;
const app = express();
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send("Hello World 2!")
})

app.get('/iss', async (req, res) => {
    const locationData = await issCurrentLocation()
    res.send(locationData)
})

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
})