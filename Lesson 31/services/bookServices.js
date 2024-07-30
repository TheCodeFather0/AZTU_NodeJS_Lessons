import bookModel from "../schema/book.js";

export const getAllBooks = (req, res) => {
  bookModel.find().then((data) => {
    res.json(data);
  });
};

export const getBookById = (req, res) => {
  bookModel
    .findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err) res.status(404).json({ message: "data not found" });
    });
};

export const changeBook = (req, res) => {
  bookModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).json({
        message: "book has been updated",
      });
    })
    .catch((err) => {
      if (err) res.status(400).json({ message: "bad request" });
    });
};

export const deleteBook = (req, res) => {
  bookModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "book has been deleted",
      });
    })
    .catch((err) => {
      if (err) res.status(400).json({ message: "bad request" });
    });
};
