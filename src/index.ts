// src/index.js
import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const router : Router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', require('./routes/index'));
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Template to an API with Express and Typescript");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
