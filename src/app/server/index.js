import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import morgan from "morgan";
import express, { NextFunction, Request, Response } from "express";
import nocache from "nocache";
dotenv.config();
import next from "next";
import { connectToDatabase1 } from "./db";

connectToDatabase1();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: false }));
  app.use(nocache());
  app.use(morgan("dev"));

  app.use((req: Request, res: Response) => {
    return handle(req, res);
  });

  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
});
