import express, { Application, Request, Response } from "express";
import path from "path";
import todosRouter from "./todos/todos.routes";

const app: Application = express();
app.use(express.json());

const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todos app");
});

export default app;

/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
