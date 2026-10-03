const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Apnacollege",
    content:
      "Learning programming is not about memorizing everything at once. It is about understanding the basics, practicing regularly, solving problems, and slowly building the confidence to create projects on your own. Stay consistent and keep learning every day.",
  },
  {
    id: uuidv4(),
    username: "prathamtn19",
    content:
      "Hey, this is my new day here and i am very much excited to see you all here Learning programming is not about memorizing everything at once. It is about understanding",
  },
  {
    id: uuidv4(),
    username: "collegepro",
    content:
      " let me guide you through the whole process of placements and internships Learning programming is not about memorizing everything at once. It is about understanding",
  },
];

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ id: uuidv4(), username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;

  let post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).send("Post not found!");
  }

  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  console.log(newContent);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).send("Post not found!");
  }

  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("Listening to port: 8080");
});
