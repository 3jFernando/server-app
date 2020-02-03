"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ShopsController_1 = __importDefault(require("../controllers/ShopsController"));
class RoutesShop {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', ShopsController_1.default.list);
        this.router.get('/:id', ShopsController_1.default.getShop);
        this.router.post('/', ShopsController_1.default.store);
    }
}
const shop = new RoutesShop();
exports.default = shop.router;
