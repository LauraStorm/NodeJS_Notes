const express = require("express");
const app = express();
app.use(express.json());   //hvis man skal bruge noget fra express libary

// en anden måde at skrive ovenstående 
//const app = require("express")();


// Du kan se libary i terminalen, når du console.log()
//console.log(express);
// viser noget andet 
//console.log(app);

// -------------------------------------- //

// Route (entire thing)
//  HTTP METHOD
//  '/'   = endpoint
//  ()  = callback function 

// callback function -   () => {}   - 
//request handler  
app.get("/", (req, res) => {
    // send response
    res.send({ message: "Our first route" });           // express (dependency) håndterre json
});


let bicycleSpins = 0;
app.get("/spinsthebicycle", (req, res) => {
    bicycleSpins += 1;
    //send response
    res.send({ message: `People have spun the bicycle wheel ${bicycleSpins}`})
})

/**
 *  Assigment:
 *      Create a new route that kicks the dinosaur
 *      and then the dinosaur says  ow ow ow
 *  
 */
let countKick = 0;
app.get("/dinosaur", (req, res) => {
    countKick += 1;
    //send response
    res.send({
        message: `You kicked the dinosaur ${countKick} - ow ow ow`
    })
})


/**
 * why json:
 *  answer: it is a string format, every server can understan json - every server has a libary that can work with json
*/

// it is possible to send HTML
app.get("/about", (req, res) => {
    res.send( `
    <h1> About 4</h1>
    <h3> This is my about page. </h3>
    `)
})


// /bat?adjective=spooky       <---- query string
app.get("/bat", (req, res) => {
    console.log(req.query);                     //expressed/expression - få fat i/ acces data 

    res.send({ message: `The bat is ${req.query.adjective}`})  // passing data and work wi
});


//  endpoint: /bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params);
    res.send({ bottleSize: req.params.bottleSize })   // bottleSize --> referere til param i endt point 
})

// body parser 
app.post("/package", (req, res) => {
    //console.log(req.body);
    res.send({ message: req.body});
});


// -------------------------------------- //
//app skal lytte til en port  - skrives i bunden
app.listen(8080);
