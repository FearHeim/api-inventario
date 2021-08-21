require("dotenv").config();
let express = require("express");
let app = express();
let mongoose = require("mongoose");
let routes = require("./routes")


mongoose
  .connect(`${process.env.URL_CONEXION}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB is connected");
    const app = express();
    app.use(express.json());
    app.use("/api", routes);
    
    let port = process.env.PORT;

    app.listen(port, () => {
      console.log("Server is running in port " + port);
    });
  })
  .catch((err) => console.log(err));


