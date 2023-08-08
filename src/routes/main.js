const express = require("express");
const hbs = require("hbs");
const routes = express.Router();
const async = require("hbs/lib/async");
const Detail = require("../models/detail");
const Service = require("../models/service");
const slider = require("../models/slider");
const Contact = require("../models/contact");

routes.get("/", async (request, response) => {
  const details = await Detail.findOne({ _id: "64cbacc855acaea3e00da459" });
  const Slides = await slider.find();

  const services = await Service.find();

  // console.log(Slides);
  response.render("index", {
    details: details,
    Slides: Slides,
    services: services,
  });
});

routes.get("/gallery", async (request, response) => {
  const details = await Detail.findOne({ _id: "64cbacc855acaea3e00da459" });
  response.render("gallery", {
    details: details,
  });
});

// process contact form
routes.post("/process-contact-form", async (request, response) => {
  console.log("this form is submit");
  console.log(request.body);
  try {
    const data = await Contact.create(request.body);
    console.log(data);
    response.redirect("/");
  } catch (e) {
    console.log(e);
    response.redirect("/");
  }
});

module.exports = routes;
