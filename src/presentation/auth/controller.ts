import { Request, Response } from "express";
import { RegisterUserDTO } from "../../domain";

export class AuthController {
  constructor() {}

  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDTO.create(req.body);
    if (error) return res.status(400).json({ error });

    res.json(req.body);
  };

  loginUser = (req: Request, res: Response) => {
    res.json("loginUser Controller");
  };
}
