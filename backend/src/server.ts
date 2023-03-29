import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config({
  path: "../.env",
});

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// ROUTES
import usersRouter from "./routes/users";

app.use(usersRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server Live at http://localhost:${process.env.PORT}`)
);
