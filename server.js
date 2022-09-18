// setting up server
const { urlencoded } = require("body-parser");
const express = require("express");
const server = express();
const port = 3030;

// server needs to be able to parse data
server.use(express.json());
server.use(urlencoded({ extended: true }));

// holder for index for now (GET request handler)
server.get("/", (req, res) => res.send("<h1>You landed on homepage</h1>"));

// test post route to verify that server can read posted requests
server.post("/add", (req, res) => {
  const name = req.body.name;
  console.log(req.body);
  res.send("Welcome to our site Mr " + name);
});

// listen - last command on server - any commands afer this wont execute
server.listen(port, () => console.log(`Server is connected on port ${port}`));
