const express = require("express");
const cors = require("cors");

const PORT = 8080;

const server = express();

// cors middleware preventing me from speaking between 2 servers
server.use(cors());

server.get("/help", (req, res) => {
  res.send({
    phrase: "Hello World",
  });
});

server.listen(PORT, () => {
  console.log(`Server is on and running on Port: ${PORT}`);
});
