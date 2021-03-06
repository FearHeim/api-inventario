
let express = require("express");
let Item = require("../models/items");
let Category = require("../models/category");
let Client = require("../models/clients");
const router = express.Router();

/* router.get("/", (req, res) => {
  res.send("Bienvenido a la  de inventarios");
});

router.get("", (req, res) => {
  res.send("Em, que haces aquí dude");
});

router.get("/v1", (req, res) => {
  res.send("No, en serio, que haces aquí");
}); */

// ITEMS

router.get("/v1/inventario", async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

router.post("/v1/nuevo_item", async (req, res) => {
  const item = new Item({
    Nom_producto: req.body.Nom_producto,
    Des_producto: req.body.Des_producto,
    Category_producto: req.body.Category_producto,
    Pre_producto: req.body.Pre_producto,
    Marca_producto: req.body.Marca_producto,
    Modelo_producto: req.Modelo_producto,
    Cantidad_producto: req.Cantidad_producto,
  });
  await item.save();
  res.send(item);
});

router.delete("/v1/delete_item", async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Item doesn't exist!" });
  }
});

router.patch("/v1/update_item", async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });

    if (req.body.Nom_producto) {
      item.Nom_producto = req.body.Nom_producto;
    }

    if (req.body.Des_producto) {
      item.Des_producto = req.body.Des_producto;
    }

    if (req.body.Category_producto) {
      item.Category_producto = req.body.Category_producto;
    }

    if (req.body.Pre_producto) {
      item.Pre_producto = req.body.Pre_producto;
    }

    if (req.body.Marca_producto) {
      item.Marca_producto = req.body.Marca_producto;
    }

    if (req.body.Modelo_producto) {
      item.Modelo_producto = req.body.Modelo_producto;
    }

    if (req.body.Cantidad_producto) {
      item.Cantidad_producto = req.body.Cantidad_producto;
    }

    await item.save();
    res.send(item);
  } catch {
    res.status(404);
    res.send({ error: "item doesn't exist!" });
  }
});

// CATEGORÍAS

router.get("/v1/categoria", async (req, res) => {
  const category = await Category.find();
  res.send(category);
});

router.post("/v1/nueva_categoria", async (req, res) => {
  const category = new Category({
    Codigo_cat: req.body.Codigo_cat,
    Nombre_cat: req.body.Nombre_cat,
  });
  await category.save();
  res.send(category);
});

router.delete("/v1/delete_categoria", async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Category doesn't exist!" });
  }
});

router.patch("/v1/update_categoria", async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id });

    if (req.body.Codigo_cat) {
      category.Codigo_cat = req.body.Codigo_cat;
    }

    if (req.body.Nombre_cat) {
      category.Nombre_cat = req.body.Nombre_cat;
    }

    await category.save();
    res.send(category);
  } catch {
    res.status(404);
    res.send({ error: "category doesn't exist!" });
  }
});

// CLIENTES

router.get("/v1/client", async (req, res) => {
  const client = await Client.find();
  res.send(client);
});

router.post("/v1/nuevo_client", async (req, res) => {
  const client = new Client({
    Nom_cliente: req.body.Nom_cliente,
    Apellido_cliente: req.body.Apellido_cliente,
    Email_cliente: req.body.Email_cliente,
    Pass_cliente: req.body.Pass_cliente,
  });
  await client.save();
  res.send(client);
});

router.delete("/v1/delete_client", async (req, res) => {
  try {
    await Client.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Client doesn't exist!" });
  }
});

router.patch("/v1/update_client", async (req, res) => {
  try {
    const client = await Client.findOne({ _id: req.params.id });

    if (req.body.Nom_cliente) {
      client.Nom_cliente = req.body.Nom_cliente;
    }

    if (req.body.Apellido_cliente) {
      client.Apellido_cliente = req.body.Apellido_cliente;
    }

    if (req.body.Email_cliente) {
      client.Email_cliente = req.body.Email_cliente;
    }

    if (req.body.Pass_cliente) {
      client.Pass_cliente = req.body.Pass_cliente;
    }

    await client.save();
    res.send(client);
  } catch {
    res.status(404);
    res.send({ error: "Client doesn't exist!" });
  }
});

module.exports = router;
