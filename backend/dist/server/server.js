"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var mongodb_1 = require("mongodb");
var path_1 = __importDefault(require("path"));
var multer_1 = __importDefault(require("multer"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var compression_1 = __importDefault(require("compression"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("../routes/index"));
var main_1 = require("../controllers/main");
var Server = /** @class */ (function () {
    function Server() {
        dotenv_1.default.config();
        this.app = express_1.default();
        this.config();
        this.database();
        this.routes();
        this.start();
    }
    Server.prototype.config = function () {
        this.app.set("port", process.env.PORT || 4000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(multer_1.default({
            dest: path_1.default.join(__dirname, "./upload/images/temp")
        }).array("image"));
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        this.app.use(helmet_1.default());
        this.app.use(compression_1.default());
        this.app.use(cors_1.default());
    };
    Server.prototype.routes = function () {
        this.app.use("/api", index_1.default);
        this.app.route("*").all(main_1.unkownRoute);
    };
    Server.prototype.database = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, uri, client_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(process.env.NODE_ENV === "development")) return [3 /*break*/, 2];
                        uri = process.env.MONGO_DEV_URI;
                        return [4 /*yield*/, mongoose_1.default
                                .connect(uri, {
                                useNewUrlParser: true,
                                useCreateIndex: true,
                                useFindAndModify: false,
                                useUnifiedTopology: true
                            })
                                .catch(function (err) { return console.log(err.message); })];
                    case 1:
                        _a.sent();
                        console.log("Connected to local database");
                        return [3 /*break*/, 3];
                    case 2:
                        uri = process.env.MDB_ATLAS_URI;
                        client_1 = new mongodb_1.MongoClient(uri, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true
                        });
                        client_1.connect(function (err) {
                            var collection = client_1.db("test").collection("devices");
                            return collection;
                        });
                        console.log("Conectado a la base de datos remota");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Server.prototype.start = function () {
        this.app.listen(this.app.get("port"));
        console.log("Server listening on port: " + this.app.get("port"));
    };
    return Server;
}());
exports.default = Server;
