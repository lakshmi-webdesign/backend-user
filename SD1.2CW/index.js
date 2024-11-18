const express = require("express");
const cors = require("cors");
const PORT = 3000;

let app = express();
app.use(cors());

const users = [
  {
    id: 1,
    username: "octocat",
    name: "The Octocat",
    repoCount: 8,
    location: "San Francisco",
  },
  {
    id: 2,
    username: "torvalds",
    name: "Linus Torvalds",
    repoCount: 25,
    location: "Portland",
  },
  {
    id: 3,
    username: "gaearon",
    name: "Dan Abramov",
    repoCount: 50,
    location: "London",
  },
  {
    id: 4,
    username: "addyosmani",
    name: "Addy Osmani",
    repoCount: 42,
    location: "Mountain View",
  },
  {
    id: 5,
    username: "tj",
    name: "TJ Holowaychuk",
    repoCount: 150,
    location: "Victoria",
  },
];

app.get("/users", (req, res) => {
  res.json({ users: users });
});

app.get("/users/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let result = users.filter((obj) => obj.id === id);
    res.json({user:result});
})

app.listen(PORT, () => {
  console.log("Server running at port:" + PORT);
});
