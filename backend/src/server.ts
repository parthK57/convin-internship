import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import ErrorHandler from "./Services/ErrorHandler";

dotenv.config({
  path: "../.env",
});

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4173",
  })
);

// ROUTES
import usersRouter from "./routes/users";
import dataRouter from "./routes/data";

app.use(usersRouter);
app.use(dataRouter);

// Error Handling
app.use((error: ErrorHandler, req: any, res: any, next: any) => {
  res.status(error.statusCode).send(error.message);
});

app.listen(process.env.PORT, () =>
  console.log(`Server Live at http://localhost:${process.env.PORT}`)
);
