"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
class RoutesProducts {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', ProductsController_1.default.list);
        this.router.get('/:id', ProductsController_1.default.getCategorie);
        this.router.post('/', ProductsController_1.default.store);
    }
}
const products = new RoutesProducts();
exports.default = products.router;
