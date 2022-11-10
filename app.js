const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);



mongoose
  .connect(
    'mongodb+srv://yamen1:yamen1@cluster0.ajczdra.mongodb.net/social?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(3000);
    console.log("heloo")
  })
  .catch(err => console.log(err));
