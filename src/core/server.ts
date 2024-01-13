import express from "express";
import { Router, Request, Response } from "express";
import route from "../application/routes/TaskRoutes";

const app = express();

app.use(express.json());

app.use("/tasks", route);

app.listen(3000, () => "server running");
