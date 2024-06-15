import { Response } from "express";
import { CustomError } from "../../domain";

export function handleError(error: unknown, res: Response) {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  console.log(error); //* Use a logger
  return res.status(500).json({ error: "Internal server error" });
}
