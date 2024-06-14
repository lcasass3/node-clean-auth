import { User } from "../entities/user.entity";
import { RegisterUserDTO } from "../dtos/auth/register-user.dto";

// The repository is an abstraction not an implementation, it receives a datasource of the rules that must follow
export abstract class AuthRepository {
  abstract register(registerUserDto: RegisterUserDTO): Promise<User>;
}
