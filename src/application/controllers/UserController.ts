import { Request, Response } from "express";
import { UserDto } from "../../data/dtos/UserDTO";
import { UserService } from "../services/UserService";

export class UserController {
    userService = new UserService();

    async getUsers(request: Request, response: Response) {
        const users = await this.userService.getUsers();
        return response.status(200).json(users);
    }

    async createUser(request: Request, response: Response) {
        const { email, name, password }: UserDto = request.body

        const createdUser: UserDto = await this.userService.saveUser({ name, email, password })
        return response.status(201).json(createdUser);
    }

    async updateUser(request: Request, response: Response) {
        if (!request.params.id) {
            throw new Error("Parametro id não encontrado")
        }
        if (!request.body) {
            throw new Error("Corpo da requisição não encontrado")
        }
        const { name, email, password }: UserDto = request.body;
        const {id} = request.params;

        const updatedUser: UserDto = await this.userService.updateUser({id, name, email, password});
        return response.status(200).json(updatedUser);
    }

    async getUserById(request: Request, response: Response) {
        const { id } = request.params;
        if (!id) {
            throw new Error("Parametro id não encontrado")
        }
        const userDto: UserDto = await this.userService.getUserById(id);
        return response.status(200).json(userDto);
    }

}