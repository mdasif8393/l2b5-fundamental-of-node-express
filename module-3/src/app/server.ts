import { Server } from "http";
import app from "./app";
import { client } from "../config/mongodb";

const port = 5000;
let server: Server;

const bootstrap = async () => {
  await client.connect();
  console.log("Connected to mongo db");

  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
