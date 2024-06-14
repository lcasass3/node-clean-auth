import {
  RegisterUserDTO,
  AuthRepository,
  User,
  AuthDatasource,
} from "../../domain";
export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDatasource: AuthDatasource) {}

  register(registerUserDto: RegisterUserDTO): Promise<User> {
    return this.authDatasource.register(registerUserDto);
  }
}
