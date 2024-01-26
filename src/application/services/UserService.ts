import { validate } from "uuid";
import { UserDto } from "../../data/dtos/UserDTO";
import { UserMapper } from "../../data/dtos/mappers/UserMapper";
import { User } from "../../data/models/User";
import { UserRepository } from "../../data/repositories/UserRepository";

export class UserService {
  userRepository = new UserRepository();

  async saveUser(userDto: UserDto) {
    let user = await UserMapper.toEntity(userDto);
    user = await this.userRepository.saveUser(user);
    return await UserMapper.toDto(user); 
  }

  async getUsers() {
    const users = await this.userRepository.getUsers();
    const usersDto = users.map((user) => {
      return UserMapper.toDto(user);
    });
    return usersDto;
  }

  async getUserById(id: string): Promise<UserDto> {
    if (!validate(id)) {
      throw new Error("Id com padrão inválido, por favor verificá-lo")
    }
    const user: User = await this.userRepository.getUserById(id);
    const usersDto: UserDto = UserMapper.toDto(user);

    return usersDto;
  }

  async updateUser(userDto: UserDto) {
    const user = await UserMapper.toEntity(userDto);
    const updatedUser = await this.userRepository.updateUser(user);
    return UserMapper.toDto(updatedUser);
  }

  async deleteUser(id: string) {
    if (!validate(id)) {
      throw new Error("Id com padrão inválido, por favor verificá-lo")
    }
    return this.userRepository.deleteUser(id);
  }
}
