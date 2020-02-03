"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../src/config/database"));
class CategoriesController {
    list(req, res) {
        database_1.default.query("SELECT * FROM categories", [], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'categories': result }).status(200);
        });
    }
    getCategorie(req, res) {
        database_1.default.query("SELECT * FROM categories WHERE id=?", [req.params.id], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'categorie': result }).status(200);
        });
    }
    store(req, res) {
        database_1.default.query("INSERT INTO categories (id_shop, name, image_name, image_path) VALUES (?, ?, ?, ?)", [
            req.body.id_shop,
            req.body.name,
            req.body.image_name,
            req.body.image_path
        ], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'categorie': result }).status(200);
        });
    }
}
const categoriesController = new CategoriesController();
exports.default = categoriesController;
