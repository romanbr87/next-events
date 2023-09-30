import express from "express";
import { remultExpress } from "remult/remult-express";
import { MongoClient } from "mongodb";
import { MongoDataProvider } from "remult/remult-mongo";
import session from "cookie-session";

import { Task } from "../shared/task";
import { TaskController } from "../shared/TasksControoler";

import { ClientsModel } from "./models/clients/clients.schema";
import { ProductsModel } from "./models/clients/products.schema";

import { auth } from "./auth";
require("dotenv").config();

const app = express();
//app.use(express.static(process.cwd()+"/dist")); //for production
app.use(express.json()); //json parsing/casting to body to json template
// app.use(session({
//     secret:process.env["SESSION_SECRET"] ||"secret",
// })
// );
app.use(
  remultExpress({
    entities: [Task],
    controllers: [TaskController],
    getUser: (req) => req.session!["user"], //Enter users profile,sign-in
    dataProvider: async () => {
      try {
        console.log(process.env["MONGO_URL"]);
        const client = new MongoClient(process.env["MONGO_URL"]!);
        await client.connect();
        console.log("DB Connection successful");
        return new MongoDataProvider(client.db("test"), client);
      } catch (error) {
        console.error(error);
      }
    },
  }),
);

app.use(auth); //call to sign in ans sign out functions,authentication
app.get("/api/hi", (req, res) => res.send("Hello Maor"));
app.listen(process.env["PORT"] || 8080, () => console.log("server started"));
