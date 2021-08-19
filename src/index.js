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
  res.send(items);
});

app.post("api/v1/nuevo_item", async (req, res) => {
  const item = new Item({
    Nom_producto: req.body.Nom_producto,
    Des_producto: req.body.Des_producto,
    Pre_producto: req.body.Pre_producto
  });
  await item.save();
  res.send(item);
});

app.delete("api/v1/delete-item", async (req, res)=>{
  try {
    await Item.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Item doesn't exist!" });
  }
})


app.patch("api/v1/update", async (req, res)=>{
  try {
		const item = await Item.findOne({ _id: req.params.id })

		if (req.body.Pre_producto) {
			item.Pre_producto = req.body.Pre_producto
		}

		if (req.body.Des_producto) {
			post.Des_producto = req.body.Des_producto
		}
    
		if (req.body.Pre_producto) {
			post.Pre_producto = req.body.Pre_producto
		}

		await item.save()
		res.send(item)
	} catch {
		res.status(404)
		res.send({ error: "item doesn't exist!" })
	}
})

let port = process.env.PORT;
let server = app.listen(port, () => {
  console.log("Server is running in port " + port);
});
