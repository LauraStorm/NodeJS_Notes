const express = require("express");
// instansiere 
const app = express ();

// serving files - static files: js, css, html
app.use(express.static("public")); 

// ------- ROUTES ------- //

/* Pages */
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

/* API */
const weekdays = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

app.get("/api/times", (req, res) => {
    const date = new Date();
    const today = weekdays[date.getDay()];
    res.send({data: today})
})
console.log()


// ------- PORT ------- //
app.listen(8080, () => console.log("Server is running on port ", 8080));