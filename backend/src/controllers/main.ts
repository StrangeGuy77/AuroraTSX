/* This controller stands for undefined or just verification routes,
 * also for first redirect ('/') and some others that cannot be implied within
 * a controller with an specified route like '/users/:id/products' and so on.
 */
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Controller
export function home(req: Request, res: Response): void {
  switch (req.method) {
    case "GET":
      res.status(200).json({
        message:
          "This is the main api route. For more information contact CTO for available routes and validation."
      });
      break;
    default:
      res.status(404).json({
        message: `You cannot send ${req.method} method to home route!`
      });
      break;
  }
}

export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {}

export async function contact(req: Request, res: Response): Promise<void> {}

export async function getLanguageJSON(
  req: Request,
  res: Response
): Promise<void> {}

export function unkownRoute(req: Request, res: Response): void {
  res.status(404).json({
    message: `The route you are trying to access doesn't exist.`
  });
}
