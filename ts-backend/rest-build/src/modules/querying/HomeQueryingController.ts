import { Software } from "../../entity/Software";
import { Request, Response } from "express";

export const getRecentSoftwares = async (req: Request, res: Response) => {
  Software.find({
    order: {
      createdAt: "ASC"
    }
  });
};

export const defaultRouteAnswer = (req: Request, res: Response) => {
  res.send(
    `The route you're trying to access ${
      req.originalUrl
    } and the method you're trying to use ${req.method.toUpperCase()} is not available, created or is restricted.`
  );
};
