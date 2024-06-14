import { User } from "../entities/user.entity";
import { RegisterUserDTO } from "../dtos/auth/register-user.dto";

// The datasources are basically the abstraction of the RULES that our app must follow, independent of HOW we do anything
// or what we use to do something
export abstract class AuthDatasource {
  abstract register(registerUserDto: RegisterUserDTO): Promise<User>;
}
