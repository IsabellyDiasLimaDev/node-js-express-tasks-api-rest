import { DeleteResult } from "typeorm";
import { typeOrmConfig } from "../../core/config/typeOrmConfig";
import { User } from "../models/User";

export class UserRepository {
  userRepository = typeOrmConfig.getRepository(User);

  async saveUser(user: User): Promise<User> {
    const isExistingUser = await this.userRepository.findOne({
      where: { email: user.email },
    });

    if (isExistingUser) {
      throw new Error("Usuário já existe");
    }

    return this.userRepository.save(user);
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.find();

    if (users.length === 0) {
      throw new Error("Não existem usuários cadastrados");
    }

    return users;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({
      id: id,
    });

    if (!user) {
      throw new Error(
        "Não foi encontrado usuário cadastrado com o id selecionado"
      );
    }

    return user;
  }

  async updateUser(user: User): Promise<User> {
    const hasId = await this.userRepository.hasId(user);

    if (!hasId) {
      throw new Error("Não existe usuários a serem editados");
    }

    return this.userRepository.save(user);
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error(
        "Usuário não encontrado: Não foi possível apagar este usuário"
      );
    }

    return this.userRepository.delete(id);
  }
}
