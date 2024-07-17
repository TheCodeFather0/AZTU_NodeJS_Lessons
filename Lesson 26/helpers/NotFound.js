export const notFoundMessage = (res) => {
    res.status(404);
    res.json({
      message: "not found.",
    });
  };