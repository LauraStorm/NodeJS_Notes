const express = require("express");
const app = express();
const birds = require("./birds");

app.use(express.json());

// List with Birds  
let birdsList = [
    { id: 1, name: 'blackbird', species: 'sparrow', color: 'black' }, 
    { id: 2, name: 'eagle', species: 'bird', color: 'brown' },  
    { id: 3, name: 'seagull', species: 'bird', color: 'white' },
    { id: 4, name: 'robin', species: 'sparrow', color: 'black'}
]; 


// --- ROUTES --- //

// * POST * //
let idCounter = birdsList.length + 1;
app.post("/birds", (req, res) => {
    const {...bird} = req.body;
    const newBird = {id:idCounter ++, ...bird};
    birdsList.push(newBird);
    res.send({data : newBird});  
});

// * GET * //
// http://localhost:8080/birds
app.get("/birds", (req, res) => {
    res.send({data: birdsList});
});

// http://localhost:8080/birds/1
app.get("/birds/:id", (req, res) => {
    const { id } = req.params;
    const bird = birdsList.find(bird => bird.id === Number(id));
    
    if (bird) {
        res.send({data : bird});   
    } else {
        res.send({data : `Bird not found with id: ${id}`});   
    };
});

// http://localhost:8080/birds/species/bird
app.get("/birds/species/:species", (req, res) => {
    const {species} = req.params;
    const speciesBirds = birdsList.filter(bird => bird.species === species);

    if (speciesBirds.length !== 0) { 
        res.send({data : speciesBirds});
    } else {
        res.send({data : `Species not found: ${species}`});   
    };
});

// http://localhost:8080/birds/color/black
app.get("/birds/color/:color", (req, res) => {
    const {color} = req.params;
    const colorBirds = birdsList.filter(bird => bird.color === color);

    if (colorBirds.length !== 0) { 
        res.send({data : colorBirds});
    } else {
        res.send({data : `No Birds with color: ${color}`});   
    };
});

// * PATCH * //
app.patch("/birds/:id", (req, res) => {
    const {id} = req.params;
    const {... updatedbird} = req.body;
    const bird = birdsList.find(bird => bird.id === Number(id));
   
    if (!bird) {
        return res.send({data : `Bird not found with id: ${id}`})
    };

    if (updatedbird.name) {
        bird.name = updatedbird.name;
    };
    
    if (updatedbird.species) {
        bird.species = updatedbird.species;
    };

    if (updatedbird.color) {
        bird.color = updatedbird.color;
    };

    res.send({data: bird});
});

// * DELETE * //
app.delete("/birds/:id", (req, res) => {
    const {id} = req.params;
    const bird = birdsList.find(bird => bird.id === Number(id));
   
    if (bird) {
        birdsList = birdsList.filter( bird => bird.id !== Number(id));
        res.send({data: birdsList});
    } else {
        res.send({data : `No Bird with id: ${id} --> could not delete`});
    };
});


// --- PORT --- //
app.listen(8080, () => console.log("Server is running on port ", 8080));
