const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/main");
const Detail = require("./models/detail");
const Slider = require("./models/slider");
const Service = require("./models/service");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/static", express.static("public"));
app.use("/", routes);
// Slider.create([
//   {
//     title: "learning js",
//     subTitle: "js is most popular language",
//     imageUrl: "/static/images/s1.jpg",
//   },
//   {
//     title: "React is framework of javascript",
//     subTitle: "React JS",
//     imageUrl: "/static/images/s2.jpg",
//   },
//   {
//     title: "This project is in nodejs mongodb",
//     subTitle: "node js",
//     imageUrl: "/static/images/s3.jpg",
//   },
// ]);

// db connections
mongoose
  .connect("mongodb://127.0.0.1:27017/website_tut")
  .then
  //   Detail.create({
  //     brandName: "Rajat negi",
  //     brandIconUrl:
  //       "https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg",
  //     links: [
  //       {
  //         label: "home",
  //         url: "/",
  //       },
  //       {
  //         label: "Services",
  //         url: "/services",
  //       },
  //       {
  //         label: "Gallery",
  //         url: "/gallery",
  //       },
  //       {
  //         label: "About",
  //         url: "/about",
  //       },
  //       {
  //         label: "Contact Us",
  //         url: "/contact-us",
  //       },
  //     ],
  //   })
  ();

// Service.create([
//   {
//     icon: "fab fa-accusoft",
//     title: "Provide best courses",
//     description: "We provide courses that help our student in learning ",
//     linkText: "https://www.learncodewithdurgesh.com",
//     link: "Check",
//   },
//   {
//     icon: "fab fa-affiliatetheme ",
//     title: "Learn Projects",
//     description: "We provide courses that help our student in learning ",
//     linkText: "https://www.learncodewithdurgesh.com",
//     link: "Learn",
//   },
//   {
//     icon: "fab fa-affiliatetheme ",
//     title: "Learn Projects",
//     description: "We provide courses that help our student in learning ",
//     linkText: "https://www.learncodewithdurgesh.com",
//     link: "Learn",
//   },
// ]);

// (template engine)
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

app.listen(5000, () => {
  console.log("server started");
});
