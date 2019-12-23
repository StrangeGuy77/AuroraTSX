import { Request, Response, NextFunction } from "express";

export async function getUsers(req: Request, res: Response): Promise<void> {}

export async function getUser(req: Request, res: Response): Promise<void> {}

export async function createUser(req: Request, res: Response): Promise<void> {}

export async function updateUser(req: Request, res: Response): Promise<void> {}

export async function deleteUser(req: Request, res: Response): Promise<void> {}

export async function picUpload(req: Request, res: Response): Promise<void> {}

export async function verifyUserAccount(
  req: Request,
  res: Response
): Promise<void> {}
