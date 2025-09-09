import "reflect-metadata";
const express = require('express');
const helmet = require("helmet");
const app = express();
var rec = 1;

app.use(helmet());
app.get("/", (req, res)=>{
    res.status(200).send("You've reached me!")
    console.log("Listener: }" + rec)
    rec++;
});

app.listen(8080, ()=>{
    console.log("Listening")
});