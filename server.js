// setting up server
const express = require("express");
const server = express();
const port = 3030;

// server needs to be able to parse data
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// holder for index for now (GET request handler)
server.get("/", (req, res) => res.send("<h1>You landed on homepage</h1>"));

// test post route to verify that server can read posted requests
server.post("/add", (req, res) => {
  const obj = {
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  };
  console.log(req.body);
  res.send("Welcome to our site Mr " + obj.name);
});

// listen - last command on server - any commands afer this wont execute
server.listen(port, () => console.log(`Server is connected on port ${port}`));
