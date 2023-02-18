//import express and cors
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

const mongoUri = "mongodb://hari_prasath:stHMVikz65z2io4m@ac-nvhi4sc-shard-00-00.ptzl5bn.mongodb.net:27017,ac-nvhi4sc-shard-00-01.ptzl5bn.mongodb.net:27017,ac-nvhi4sc-shard-00-02.ptzl5bn.mongodb.net:27017/?ssl=true&replicaSet=atlas-10fen0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.set('strictQuery', true)

mongoose.connect(mongoUri, { useNewUrlParser: true })
    .then((on) => console.log("db connected"))
    .catch((err) => console.log(err))

//create a route
// app.get('/message', (req, res) => {
//     res.json({ message: "hellooo" });
// })

//import routes
const userRoute = require("./Routes/user");

//using that imported route
app.use(userRoute)

//start the server
app.listen(8000, () => {
    console.log("server is connected");
});

//stHMVikz65z2io4m
//hari_prasath
//mongodb://hari_prasath:<password>@ac-nvhi4sc-shard-00-00.ptzl5bn.mongodb.net:27017,ac-nvhi4sc-shard-00-01.ptzl5bn.mongodb.net:27017,ac-nvhi4sc-shard-00-02.ptzl5bn.mongodb.net:27017/?ssl=true&replicaSet=atlas-10fen0-shard-0&authSource=admin&retryWrites=true&w=majority