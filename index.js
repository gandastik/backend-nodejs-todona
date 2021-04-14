const express = require("express");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://dbUser:dbUserPassword@cluster0.6lqvl.mongodb.net/todona?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Database connected");
  });

// mongoose
//   .connect("mongodb://localhost:27017/todona", { useNewUrlParser: true })
//   .then(() => {
//     console.log("Database Connected at port 27017");
//   });

app.use("/api", routes);

app.listen(process.env.PORT || 1000, () => {
  console.log("Server started");
});

// app.listen(1000, () => {
//   console.log("server is ready on port 1000");
// });
