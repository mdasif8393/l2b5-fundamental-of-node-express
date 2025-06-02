import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../../db/todo.json");

const todosRouter = express.Router();

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  res.json({
    message: "From Todos Router",
    data,
  });
});

todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  res.json({ title, body });
});

export default todosRouter;
