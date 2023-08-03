// Create web server
// Start web server
// Create connection to database
// Create schema for database
// Create model for database
// Create routes for web server
// Create views for web server
// Create controllers for web server
// Create helper functions for web server
// Create middleware for web server

// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Start web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Create connection to database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/express_comments", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create schema for database
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Comment = new Schema({
  title: String,
  body: String,
  date: Date,
});

// Create model for database
const CommentModel = mongoose.model("Comment", Comment);

// Create routes for web server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/comments", (req, res) => {
  CommentModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.get("/comments/:id", (req, res) => {
  CommentModel.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.post("/comments", (req, res) => {
  const comment = new CommentModel({
    title: "Title",
    body: "Body",
    date: new Date(),
  });

  comment.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.put("/comments/:id", (req, res) => {
  CommentModel.findByIdAndUpdate(
    req.params.id,
    { title: "New Title" },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.send(data);
      }
    }
  );
});

