import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";

const userRoute = Router();

const userController = new UserController();

userRoute.get("/", (req: Request, res: Response) => {
    userController.getUsers(req, res);
});

userRoute.post("/", (req: Request, res: Response) => {
    userController.createUser(req, res);
});

userRoute.put("/:id", (req: Request, res: Response) => {
    userController.updateUser(req, res);
});

userRoute.get("/:id", (req: Request, res: Response) => {
    userController.getUserById(req, res);
});

export default userRoute;