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
 * - I want you to create a components that will render your products ✅
 * - I want you to create a component that with have a form that will be used
 * to add a product -
 * - I want you to create a component that updates a product -
 * - add some CSS styling to your project -
 * - RESEARCH  (REACT-ROUTER) - is a Lib that we use in our react code to ✅
 *  travel between webpages
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

server.listen(PORT, () => {
  console.log(`Server is on and running on Port: ${PORT}`);
});
