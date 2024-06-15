import { UserModel } from "../../data/mongodb";
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
      const exists = await UserModel.findOne({ email });
      if (exists) throw CustomError.badRequest("User already exists");

      const user = await UserModel.create({
        name: name,
        email: email,
        password: password,
      });

      await user.save();

      return new User(user.id, name, email, password, user.roles);
    } catch (error) {
      if (error instanceof CustomError) throw error;
    }
    throw CustomError.internalServer();
  }
}
