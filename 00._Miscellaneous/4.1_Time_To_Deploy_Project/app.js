const express = require('express');
const app = express ();



// -------------- PAGES -------------- //
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/homepage.html')
})


// -------------- PORT -------------- //
const PORT = 8080;
app.listen(PORT, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log('Server is running on port ', PORT);
})