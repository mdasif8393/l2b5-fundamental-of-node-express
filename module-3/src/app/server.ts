import { Server } from "http";
import app from "./app";

const port = 5000;

let server: Server;

const bootstrap = async () => {
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
