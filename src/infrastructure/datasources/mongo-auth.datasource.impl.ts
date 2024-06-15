import {
  AuthDatasource,
  CustomError,
  RegisterUserDTO,
  User,
} from "../../domain";

export class MongoAuthDataSourceImpl implements AuthDatasource {
  async register(registerUserDto: RegisterUserDTO): Promise<User> {
    const { name, email, password } = registerUserDto;

    try {
      // TODO: Add database logic to create user here

      return new User("1", name, email, password, "ADMIN");
    } catch (error) {
      if (error instanceof CustomError) throw error;
    }
    throw CustomError.internalServer();
  }
}
