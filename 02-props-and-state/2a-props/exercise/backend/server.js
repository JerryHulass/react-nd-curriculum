const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const connectDB = require("./config/db");

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

/**
 * (Part 2 )
 * We will now use Mongoose in our application ✅
 * We Need to create Our Schema for your DB ✅
 * We will Create a Mongodb Project & Cluster ✅
 *
 * Create a .env file and add you connection string and password to
 * your .env file ✅
 *
 * Then Test your connect to your DATABASE ✅
 *
 * Two Schemas( Users & Products ) ✅
 */

/**
 * (Part 3 )
 *
 * Populate your database with 3 users and 10 products
 * create your getALLProducts() getOneProduct() ✅
 * postProduct() updateProduct() and deleteProduct() ✅
 * We need to create the routes that goes with these functions. ✅
 *
 */

/**
 * Part 4
 *
 * create all of the same functionality for our users that we just created for our Products
 * -- Move to our Frontend React application
 * - I want you to create a components that will render your products
 * - I want you to create a component that with have a form that will be used
 * to add a product
 * - I want you to create a component that updates a product
 * - add some CSS styling to your project
 *
 */

const PORT = 8080;

const server = express();
// Connection to Database
connectDB();

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
