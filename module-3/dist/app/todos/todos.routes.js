"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
const todosRouter = express_1.default.Router();
todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    res.json({
        message: "From Todos Router",
        data,
    });
});
todosRouter.post("/create-todo", (req, res) => {
    const { title, body } = req.body;
    res.json({ title, body });
});
exports.default = todosRouter;
