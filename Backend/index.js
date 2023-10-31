import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRouts.js'
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// app.use(
//   cors({
//     origin:'http://localhost:5173',
//     methods:['GET','POST','DELETE'],
//     allowedHeaders:['Content-Type'],
//   })
// )

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome To MERN Stack ");
});

app.use('/book',booksRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log("App is listening to Port: " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
