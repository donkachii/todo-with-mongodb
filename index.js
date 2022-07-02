const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("./routes/todoRoutes");
const todoControllers = require("./controllers/todoController");
const { errorHandler } = require("./middleware/errorMiddleware");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

app.use(errorHandler);

// connect to mongoDB
connectDB();

const port = process.env.PORT || 3000;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
