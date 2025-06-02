"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todosRouter = express_1.default.Router();
app.use("/todos", todosRouter);
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
todosRouter.get("/all-todos", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    res.json({
        message: "From Todos Router",
        data,
    });
});
// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to ToDos app");
// });
todosRouter.post("/todos/create-todo", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
});
exports.default = app;
/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
