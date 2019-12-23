import { Request, Response, NextFunction } from "express";

export async function getBooks(req: Request, res: Response): Promise<void> {}

export async function getBook(req: Request, res: Response): Promise<void> {}

export async function createBook(req: Request, res: Response): Promise<void> {}

export async function updateBook(req: Request, res: Response): Promise<void> {}

export async function deleteBook(req: Request, res: Response): Promise<void> {}

export async function buyBook(req: Request, res: Response): Promise<void> {}

export async function likeBook(req: Request, res: Response): Promise<void> {}

export async function commentBook(req: Request, res: Response): Promise<void> {}

// Wishlist methods
export async function getWishlist(req: Request, res: Response): Promise<void> {}

export async function createWishlist(
  req: Request,
  res: Response
): Promise<void> {}

export async function deleteWishlist(
  req: Request,
  res: Response
): Promise<void> {}
