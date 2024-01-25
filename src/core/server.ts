import express from "express";
import taskRoute from "../application/routes/TaskRoutes";
import userRoute from "../application/routes/UserRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/tasks", taskRoute);

app.use("/users", userRoute);

app.listen(3000, () => "server running");
