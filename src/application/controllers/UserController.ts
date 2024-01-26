import { Request, Response } from "express";
import { UserDto } from "../../data/dtos/UserDTO";
import { UserService } from "../services/UserService";

export class UserController {
    userService = new UserService();

    async getUsers(request: Request, response: Response) {
        const { page, itemsPerPage } = request.query;

        const skip = (parseInt(page as string) - 1) * parseInt(itemsPerPage as string); // Calcular quantos registros pular
        const take = parseInt(itemsPerPage as string); // Quantidade de registros a serem retornados

        const [usersDto, totalUsers]: [UserDto[], number] = await this.userService.getUsers(skip, take);
        const totalPages = Math.ceil(totalUsers/take)
        return response.status(200).json({
            "page": page,
            "total pages": totalPages,
            "total users": totalUsers,
            "users": usersDto
        });
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

    async deleteUser(request: Request, response: Response) {
        const { id } = request.params;
        if (!id) {
            throw new Error("Parametro id não encontrado")
        }
        await this.userService.deleteUser(id);
        return response.status(204).send();
    }

}