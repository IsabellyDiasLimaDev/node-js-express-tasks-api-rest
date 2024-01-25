import { Request, Response } from "express";
import { UserDto } from "../../data/dtos/UserDTO";
import { UserService } from "../services/UserService";
import { User } from "../../data/models/User";

export class UserController {
    userService = new UserService();

    async getUsers(request: Request, response: Response) {
        const users = await this.userService.getUsers();
        return response.status(200).json(users);
    }

    async createUser(request: Request, response: Response) {
        const { email, name, password }: UserDto = request.body

        const createdUser: Promise<User> = this.userService.saveUser({ name, email, password })
        return response.status(201).json(createdUser);
    }
}