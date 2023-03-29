import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config({
  path: "../.env",
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

// ROUTES



app.listen(process.env.PORT, () =>
  console.log(`Server Live at http://localhost:${process.env.PORT}`)
);
