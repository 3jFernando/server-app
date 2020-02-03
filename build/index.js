"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_users_1 = __importDefault(require("./src/routes/routes_users"));
const routes_shops_1 = __importDefault(require("./src/routes/routes_shops"));
const routes_categories_1 = __importDefault(require("./src/routes/routes_categories"));
const routes_products_1 = __importDefault(require("./src/routes/routes_products"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.configApp();
        this.configRoutes();
    }
    configApp() {
        this.app.set('port', process.env.PORT || 3400);
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    configRoutes() {
        this.app.use('/api/users/', routes_users_1.default);
        this.app.use('/api/shops/', routes_shops_1.default);
        this.app.use('/api/categories/', routes_categories_1.default);
        this.app.use('/api/products/', routes_products_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => { console.log("server running"); });
    }
}
const server = new Server();
server.start();
