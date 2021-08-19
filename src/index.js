let axios = require('axios')
require("dotenv").config();
let cors = require("cors");
let express = require("express");
let app = express();

app.use(cors({}));

app.get("/", (req, res)=>{
    res.send("Bienvenido a la API de inventarios")
})


app.get("/api", (req, res)=>{
    res.send("Em, que haces aquí dude")
})

app.get("/api/v1", (req, res)=>{
    res.send("No, en serio, que haces aquí")
})


app.get("/api/v1/inventario", (req, res)=>{
    res.send("hi")
})


let port = process.env.PORT;
let server = app.listen(port, () => {
  console.log("Server is running in port " + port);
});
