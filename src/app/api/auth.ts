import { Router } from "express";
import { UserInfo } from "remult";

//demo DB for testing
const validUsers: UserInfo[] = [
  { id: "1", name: "Nati" },
  { id: "2", name: "Nir" },
  { id: "3", name: "Maor" },
];

export const auth = Router();

//sign in request/function
auth.post("/api/signIn", (req, res) => {
  console.log(req.body.username);
  const user = validUsers.find((user) => user.name === req.body.username); //find users in DB
  if (user) {
    console.log(user);
    req.session?.["user"] = user; //update the current user
    res.json(user);
  } else {
    console.log("didn't enter user name");
    res.status(404).json("Invalid user");
  }
});

//sign out request/function
auth.post("/api/signOut", (req, res) => {
  req.session?.["user"] = null;
  res.json("ok");
});

//return cuurent user to front end
auth.get("/api/currentUser", (req, res) => res.json(req.session?.["user"]));
