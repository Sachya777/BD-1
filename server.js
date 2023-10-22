



// Server Intiate-->
const express = require('express');

const app = express();

// Parsing======>>>

const bodyParser = require('body-parser');

app.use(bodyParser.json());

// server run on port 3000-->

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
});

// Routes---

// get request:---->

app.get('/' , (req,res) =>{
    res.send(" Sachin here");
});


// post request:--->

app.post('/api/cars' , (req,res)=>
{
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    console.send("car submited successful");
})


// connecting the express.js to mongoDb--->


// useNewUrlParser: Set to true to use the new MongoDB connection string parser. useUnifiedTopology: Set to true to use the new Server Discovery and Monitoring engine.

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase' , {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then( () => {console.log("connection succesful")})
.catch( (error) => { console.log("connection failed")});
    
