const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DB_URL =
  "mongodb+srv://elmeddin:elis123@cluster0.0wayk1g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const name = "elmeddin";
const password = "elis123";

const productSchema = new Schema({
  imageUrl: { type: String, require: true },
  title: { type: String, require: true },
  price: { type: Number, require: true },
});

const productmodel = mongoose.model("products", productSchema);

app.get("/api/product", async (req, res) => {
  try {
    const getproducts = await productmodel.find();

    if (getproducts.length > 0) {
      res.status(200).send({
        data: getproducts,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});
app.get("/api/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const getproductid = await productmodel.findById(id);

    if (getproductid) {
      res.status(200).send({
        data: getproductid,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});
app.delete("/api/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const getdeletedid = await productmodel.findByIdAndDelete(id);

    res.status(200).send({
      message: "deleted succesfully",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});
app.post("/api/product", async (req, res) => {
  try {
    const newproduct = new productmodel({ ...req.body });

    await newproduct.save();

    res.status(201).send({ message: "created succesfully" });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link: http://localhost:${port}`);
  });
});
