import { Request, Response } from "express";
import { AuthRepository, RegisterUserDTO } from "../../domain";
import { handleError } from "../../config";

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDTO.create(req.body);
    if (error) return res.status(400).json({ error });

    this.authRepository
      .register(registerUserDto!)
      .then((user) => res.json(user))
      .catch((error) => handleError(error, res));
  };

  loginUser = (req: Request, res: Response) => {
    res.json("loginUser Controller");
  };
}
