import { Router, Request, Response, NextFunction } from "express";
import {
  home,
  contact,
  verifyToken,
  getLanguageJSON,
  unkownRoute
} from "../controllers/main";
import {
  buySoftware,
  createSoftware,
  deleteSoftware,
  getSoftware,
  getSoftwares,
  updateSoftware,
  commentSoftware,
  likeSoftware
} from "../controllers/software";

import {
  buyBook,
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
  commentBook,
  likeBook,
  createWishlist,
  deleteWishlist,
  getWishlist
} from "../controllers/library";

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  picUpload,
  verifyUserAccount
} from "../controllers/user";

class indexRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.route("/").all(home);
    this.softwareRoutes();
    this.libraryRoutes();
    this.userRoutes();
    this.contactRoutes();
    this.languageRoutes();
    this.router.route("*").all(unkownRoute);
  }

  private softwareRoutes(): void {
    // General purporse routes.
    // (Create, read, update and delete)
    this.router
      .route("/software")
      .get(getSoftwares)
      .post(createSoftware);
    this.router
      .route("/software/:software_id")
      .get(getSoftware)
      .put(updateSoftware)
      .delete(deleteSoftware);

    // Unique softwares routes
    this.router.post("/software/:software_id/buy", buySoftware);
    this.router.post("/software/:software_id/like", likeSoftware);
    this.router.post("/software/:software_id/comment", commentSoftware);
  }

  private libraryRoutes(): void {
    // General purpose routes.
    // (Create, read, update and delete)
    this.router
      .route("/library")
      .get(getBooks)
      .post(createBook);
    this.router
      .route("/library/books/:book_id")
      .get(getBook)
      .put(updateBook)
      .delete(deleteBook);

    // Unique books routes
    this.router.post("/library/books/:book_id/buy", buyBook);
    this.router.post("/library/books/:book_id/like", likeBook);
    this.router.post("/library/books/:book_id/comment", commentBook);

    // Wishlist methods
    this.router.route("/library/wishlist").all(getWishlist);
    this.router
      .route("/library/wishlist/:book_id")
      .post(createWishlist)
      .delete(deleteWishlist);
  }

  private userRoutes(): void {
    // General purpose routes.
    this.router.route("/users").get(getUsers);
    this.router
      .route("/users/:user_id")
      .get(getUser)
      .post(createUser)
      .put(updateUser)
      .delete(deleteUser);

    // Unique routes
    this.router.post("/users/:user_id/pic_upload", picUpload);
    this.router.post(
      "/users/:user_id/verify_account/:verification_code",
      verifyUserAccount
    );
  }

  private contactRoutes(): void {
    // Method stands for type of contact:
    // 'Normal' stands for a normal variety of contact.
    // 'Business' stands for someone wanting a service of us.
    // 'Administrative' stands for legal cases.
    this.router.route("/contact/:method").all(contact);
  }

  private languageRoutes(): void {
    this.router.route("/:language/:options").all(getLanguageJSON);
  }
}

export default new indexRoutes().router;
