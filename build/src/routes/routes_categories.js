"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoriesController_1 = __importDefault(require("../controllers/CategoriesController"));
class RoutesCategories {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', CategoriesController_1.default.list);
        this.router.get('/:id', CategoriesController_1.default.getCategorie);
        this.router.post('/', CategoriesController_1.default.store);
    }
}
const categories = new RoutesCategories();
exports.default = categories.router;
