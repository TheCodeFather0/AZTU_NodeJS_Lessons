import express from "express";
import { getData, writeData } from "./helpers.js";

const app = express();
app.use(express.json());

const notFoundMessage = {
  message: `Page Not Found`,
};

//get
app.get("/products", (req, res) => {
  const data = getData();
  res.status(200);
  res.json(data);
});

app.get("/products/:id", (req, res) => {
  const data = getData().find(({ id }) => id === req.params.id);
  if (data) {
    res.status(200);
    res.json(data);
  } else {
    res.status(404);
    res.json(notFoundMessage);
  }
});

app.get("/*", (req, res) => {
  res.status(404);
  res.json(notFoundMessage);
});

//post
app.post("/products", (req, res) => {
  const { id, productName, price, discount, currency } = req.body;

  if (id && productName && price && discount && currency) {
    const data = getData();
    data.push(req.body);
    writeData(data);
    res.status(201);
    res.json({
      message: "Product has been created",
    });
  } else {
    res.status(400);
    res.json({
      message: "Data is required",
    });
  }
});

// put and patch
app.put("/products/:id", (req, res) => {
  const data = req.body;
  const { id, productName, price, discount, currency } = req.body;
  if (id && productName && price && discount && currency) {
    const currentProducts = getData().map((item) =>
      item.id === id ? (item = data) : item
    );
    writeData(currentProducts);
    res.status(200);
    res.json({ message: `product with id ${id} has been updated!` });
  } else {
    res.status(400);
    res.json({
      message: "Data is required",
    });
  }
});

//delete
app.delete("/products/:id", (req, res) => {
  const data = getData();
  const _id = req.params.id;
  const filteredData = data.filter(({ id }) => id !== _id);
  const deletedItem = data.filter(({ id }) => id === _id);

  if (deletedItem.length > 0) {
    writeData(filteredData);
    res.status(200);
    res.json({ message: `product with id ${_id} has been deleted!` });
  } else {
    res.status(400);
    res.json({
      message: "Id is required",
    });
  }
});

//listen server
app.listen(3001, () => {
  console.log("server is up");
});
