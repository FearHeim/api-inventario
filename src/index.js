let axios = require("axios");
require("dotenv").config();
let cors = require("cors");
let express = require("express");
let app = express();
let mongoose = require("mongoose");
let Item = require("../models/items");

app.use(cors({}));

mongoose
  .connect(`${process.env.URL_CONEXION}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Bienvenido a la API de inventarios");
});

app.get("/api", (req, res) => {
  res.send("Em, que haces aquí dude");
});

app.get("/api/v1", (req, res) => {
  res.send("No, en serio, que haces aquí");
});

app.get("/api/v1/inventario", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("api/v1/nuevo_item", async (req, res) => {
  const newItem = new Item(arg);
  const ItemSaved = await newItem.save();
  console.log(ItemSaved);
  res.send("new-Item-created", JSON.stringify(ItemSaved));
});

let port = process.env.PORT;
let server = app.listen(port, () => {
  console.log("Server is running in port " + port);
});
