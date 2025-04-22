const express = require("express");
const cors = require("cors");
const logger = require("morgan");

/**
 * We are going to built routes (PART 1)
 * ( Modularized and you seperate your concerns )
 * - Product Route(s) *
 *   - get All ✅
 *   - get ID ✅
 *   - post create a product ✅
 *   - update update a product ✅
 *   - delete to delete product given a id ✅
 *
 * - Implement Any Middleware you Need ! * ✅
 */

const PORT = 8080;

const server = express();

// cors middleware preventing me from speaking between 2 servers
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(logger("dev"));
//testing

server.use("/api", require("./Router"));

server.get("/help", (req, res) => {
  res.send({
    phrase: "Hello World",
  });
});
// home route for my <Home/> component
server.get("/", (req, res) => {
  res.send({
    phrase: "Hello World :)",
  });
});
// about route for my <About/> component
server.get("/about", (req, res) => {
  res.send({
    name: "Steven",
    discription: " Hello my name is steven and I am a Software Engineer",
  });
});
// contact route for my <Contact/> component
server.get("/contact", (req, res) => {
  res.send({
    us_state: "New York, NY",
    phone_number: "1888-555-5555",
    email: "Steven_hulse@nobledesktop.com",
  });
});
server.listen(PORT, () => {
  console.log(`Server is on and running on Port: ${PORT}`);
});
