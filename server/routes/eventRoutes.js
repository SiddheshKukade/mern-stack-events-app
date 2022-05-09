const express = require("express");
const eventRouter = express.Router();
const Event = require("../models/eventModel");
eventRouter.get("/show", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Event.find()
    .then((data) => res.json(data))
    .catch(next);
});

eventRouter.post("/create", (req, res, next) => {
  if (req.body) {
    console.log(req.body);
    Event.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

eventRouter.delete("/event/:id", (req, res, next) => {
  Event.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = eventRouter;
