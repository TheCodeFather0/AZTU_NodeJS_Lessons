import { Router } from "express";
import animals from "../data.js";
import { notFoundMessage } from "../helpers/NotFound.js";
import { v4 } from "uuid";

export const zooRouter = new Router();


zooRouter.get("/", (req, res) => {
  res.status(200);
  res.json(animals);
});

zooRouter.get("/:id", (req, res) => {
  const _id = req.params.id;
  const animal = animals.find(({ id }) => id === _id);

  if (animal) {
    res.status(200);
    res.json(animal);
  } else {
    notFoundMessage(res);
  }
});

zooRouter.get("/type/:type", (req, res) => {
  const _type = req.params.type;
  const currentAnimals = animals.filter(({ type }) => type === _type);

  if (currentAnimals.length > 0) {
    res.status(200);
    res.json(currentAnimals);
  } else {
    notFoundMessage(res);
  }
});

zooRouter.get("/count/:type", (req, res) => {
  const _type = req.params.type;
  const currentAnimals = animals.filter(({ type }) => type === _type);
  if (currentAnimals.length > 0) {
    res.status(200);
    res.json({
      type: _type,
      count: currentAnimals.length,
    });
  } else {
    notFoundMessage(res);
  }
});

zooRouter.get("/calculateAverageAge/:type", (req, res) => {
  const _type = req.params.type;
  const currentAnimals = animals.filter(({ type }) => type === _type);
  const totalAge = currentAnimals.reduce(
    (current, acc) => current + acc.age,
    0
  );
  if (currentAnimals.length > 0) {
    res.status(200);
    res.json({
      type: _type,
      averageAge: (totalAge / currentAnimals.length).toFixed(2),
    });
  } else {
    notFoundMessage(res);
  }
});

zooRouter.post("/", (req, res) => {
  const data = req.body;
  const { name, type, age, gender } = data;

  if (name && type && age && gender) {
    const id = v4();
    const haveElem = animals.find((animal) => animal.id === id);
    if (!haveElem) {
      res.status(201);
      animals.push({ id, ...data });
      res.json({
        message: "new animal has been added",
      });
    } else {
      res.json({
        message: "same id!",
      });
    }
  } else {
    res.status(417);
    res.json({
      message: "data is invalid",
    });
  }

  res.json(data);
});

zooRouter.delete("/:id", (req, res) => {
  const _id = req.params.id;
  const filteredAnimal = animals.find(({ id }) => id === _id);

  if (filteredAnimal) {
    animals.splice(animals.indexOf(filteredAnimal), 1);
    res.status(200);
    res.json({
      message: "has been deleted",
    });
  } else {
    notFoundMessage(res);
  }
});

zooRouter.delete("/type/:type", (req, res) => {
  const _type = req.params.type;
  const currentAnimals = animals.filter((item) => item.type === _type);

  if (currentAnimals.length > 0) {
    res.status(200);
    animals.map((item, index) => {
      if (item.type === _type) {
        animals.splice(index, 1);
      }
    });
    res.json({ message: "has been deleted" });
  } else {
    notFoundMessage(res);
  }
});

zooRouter.put("/:id", (req, res) => {
  const _id = req.params.id;
  let currentData = animals.find(({ id }) => id === _id);

  if (currentData) {
    res.status(200);
    const indexData = animals.indexOf(currentData);
    animals.splice(indexData, 1, { id: _id, ...req.body });
    res.json({ message: "has been updated" });
  } else {
    notFoundMessage(res);
  }
});

zooRouter.patch("/hbd/:id", (req, res) => {
  const _id = req.params.id;
  let currentData = animals.find(({ id }) => id === _id);

  if (currentData) {
    res.status(200);
    currentData.age += 1;
    const indexData = animals.indexOf(currentData);
    animals.splice(indexData, 1, currentData);
    res.json({ message: "has been updated" });
  } else {
    notFoundMessage(res);
  }
});

zooRouter.get("/*", (req, res) => {
  notFoundMessage(res);
});
