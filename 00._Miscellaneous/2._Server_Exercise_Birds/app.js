const express = require("express");
const birds = require("./birds");
const app = express();


const birdsList = birds.birds;


// --- Routes --- //
// GET //

// http://localhost:8080/birds
app.get("/birds", (req, res) => {
    res.send({ "Bird list": birdsList })
});

// http://localhost:8080/birds/1
app.get("/birds/:id", (req, res) => {
    const idInput = req.params.id;
    const bird = birds.findById(idInput);
    res.send({ "Bird by id" : bird })
});

// http://localhost:8080/birds/species/bird
app.get("/birds/species/:species", (req, res) => {
    const speciesInput = req.params.species;
    const speciesBird = birds.findBySpecies(speciesInput);
    res.send({ "Bird list by species" : speciesBird })
});

// http://localhost:8080/birds/color/black
app.get("/birds/color/:color", (req, res) => {
    const colorInput = req.params.color;
    const bird = birds.findByColor(colorInput);
    res.send({ "Bird list by color" : bird })
});


// --- Listen to port 8080 --- //
app.listen(8080);

