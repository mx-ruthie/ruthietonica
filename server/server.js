//This is the minimal express server. 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const db = require('../server/db/db-connection.js'); 

const app = express();
const PORT = 8085;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for an app with Events");
  });


app.get('/api/events', async (req, res) =>{

    //real connection with the DB eventonica
    try{
        const { rows: events } = await db.query('SELECT * FROM events');
        res.send(events);

    } catch(error){
        console.log(error);
        return res.status(400).json({error});

    }
})

app.post("/api/events", async (req, res) => {
    try {

        //had a few lines commented out here and took a while to track down why the form data wasn't getting to the db lol
        const newEvent = {
            name: req.body.name,
            description: req.body.description,
            eventtime: req.body.eventtime,
            reattend: req.body.reattend
        }
        const result = await db.query('INSERT INTO events(name, description, eventtime, reattend) VALUES ($1, $2, $3, $4) RETURNING *', [newEvent.name, newEvent.description, newEvent.eventtime, newEvent.reattend]);
        let response = result.rows[0];
        console.log(response);
        res.json(response)

    } catch (e){
        console.log(error);
        return res.status(400).json({error});
    }
})


app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));