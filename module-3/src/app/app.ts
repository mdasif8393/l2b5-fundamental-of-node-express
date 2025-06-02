import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
app.use(express.json());

const todosRouter = express.Router();
app.use("/todos", todosRouter);

const filePath = path.join(__dirname, "../../db/todo.json");

todosRouter.get("/all-todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });

  res.json({
    message: "From Todos Router",
    data,
  });
});

// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to ToDos app");
// });

todosRouter.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
});

export default app;

/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
