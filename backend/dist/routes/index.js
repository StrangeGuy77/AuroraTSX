"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var main_1 = require("../controllers/main");
var software_1 = require("../controllers/software");
var library_1 = require("../controllers/library");
var user_1 = require("../controllers/user");
var indexRoutes = /** @class */ (function () {
    function indexRoutes() {
        this.router = express_1.Router();
        this.routes();
    }
    indexRoutes.prototype.routes = function () {
        this.router.route("/").all(main_1.home);
        this.softwareRoutes();
        this.libraryRoutes();
        this.userRoutes();
        this.contactRoutes();
        this.languageRoutes();
        this.router.route("*").all(main_1.unkownRoute);
    };
    indexRoutes.prototype.softwareRoutes = function () {
        // General purporse routes.
        // (Create, read, update and delete)
        this.router
            .route("/software")
            .get(software_1.getSoftwares)
            .post(software_1.createSoftware);
        this.router
            .route("/software/:software_id")
            .get(software_1.getSoftware)
            .put(software_1.updateSoftware)
            .delete(software_1.deleteSoftware);
        // Unique softwares routes
        this.router.post("/software/:software_id/buy", software_1.buySoftware);
        this.router.post("/software/:software_id/like", software_1.likeSoftware);
        this.router.post("/software/:software_id/comment", software_1.commentSoftware);
    };
    indexRoutes.prototype.libraryRoutes = function () {
        // General purpose routes.
        // (Create, read, update and delete)
        this.router
            .route("/library")
            .get(library_1.getBooks)
            .post(library_1.createBook);
        this.router
            .route("/library/books/:book_id")
            .get(library_1.getBook)
            .put(library_1.updateBook)
            .delete(library_1.deleteBook);
        // Unique books routes
        this.router.post("/library/books/:book_id/buy", library_1.buyBook);
        this.router.post("/library/books/:book_id/like", library_1.likeBook);
        this.router.post("/library/books/:book_id/comment", library_1.commentBook);
        // Wishlist methods
        this.router.route("/library/wishlist").all(library_1.getWishlist);
        this.router
            .route("/library/wishlist/:book_id")
            .post(library_1.createWishlist)
            .delete(library_1.deleteWishlist);
    };
    indexRoutes.prototype.userRoutes = function () {
        // General purpose routes.
        this.router.route("/users").get(user_1.getUsers);
        this.router
            .route("/users/:user_id")
            .get(user_1.getUser)
            .post(user_1.createUser)
            .put(user_1.updateUser)
            .delete(user_1.deleteUser);
        // Unique routes
        this.router.post("/users/:user_id/pic_upload", user_1.picUpload);
        this.router.post("/users/:user_id/verify_account/:verification_code", user_1.verifyUserAccount);
    };
    indexRoutes.prototype.contactRoutes = function () {
        // Method stands for type of contact:
        // 'Normal' stands for a normal variety of contact.
        // 'Business' stands for someone wanting a service of us.
        // 'Administrative' stands for legal cases.
        this.router.route("/contact/:method").all(main_1.contact);
    };
    indexRoutes.prototype.languageRoutes = function () {
        this.router.route("/:language/:options").all(main_1.getLanguageJSON);
    };
    return indexRoutes;
}());
exports.default = new indexRoutes().router;
