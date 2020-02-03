"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
class RoutesUser {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', UsersController_1.default.list);
        this.router.get('/:id', UsersController_1.default.getUser);
        this.router.post('/', UsersController_1.default.store);
    }
}
const user = new RoutesUser();
exports.default = user.router;
