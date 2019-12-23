import { Request, Response, NextFunction } from "express";

export async function getSoftwares(
  req: Request,
  res: Response
): Promise<void> {}

export async function getSoftware(req: Request, res: Response): Promise<void> {}

export async function createSoftware(
  req: Request,
  res: Response
): Promise<void> {}

export async function updateSoftware(
  req: Request,
  res: Response
): Promise<void> {}

export async function deleteSoftware(
  req: Request,
  res: Response
): Promise<void> {}

export async function buySoftware(req: Request, res: Response): Promise<void> {}

export async function likeSoftware(
  req: Request,
  res: Response
): Promise<void> {}

export async function commentSoftware(
  req: Request,
  res: Response
): Promise<void> {}
