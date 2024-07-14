const express = require("express");
const fs = require("fs");
const { Server } = require("http");
const server = express();
const PORT = 3005;
const morganLoggerMiddleware = (req, res, next) => {
  // console.log(req.method, req.url);
 // const reqTimeTaken = new Date().getTime();
  const content = `method is ${req.method} status: ${req.status} content-length ${req.headers["content-length"]}
    api endpoint:${req.url} Date:${Date()}`;
   fs.appendFileSync("./src/access",content);
  next();
 // const resTimeTaken = new Date().getTime();
 // const timeTakenResAndReq = resTimeTaken - reqTimeTaken;
};
server.use(express.json());
server.use(morganLoggerMiddleware);

server.get("/", (req, res) => {
  res.status(200).send(ok).json({ messege: "welcome to home route" });
});
server.get("/get-users", (req, res) => {
  res.status(200).json({ messege: "welcome to get users route" });
});
server.post("/add-user", (req, res) => {
  res.status(201).json({ messege: "welcome to add user route" });
});
server.put("/user/:id", (req, res) => {
  res.status(201).json({ messege: "welcome to put user route" });
});
server.delete("/user/:id", (req, res) => {
  res.status(200).json({ messege: "welcome to delete user route" });
});
server.listen(PORT, (req, res) => {
  console.log(`server is running on port:${PORT}`);
});
