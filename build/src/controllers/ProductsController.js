"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../src/config/database"));
class ProductsController {
    list(req, res) {
        database_1.default.query("SELECT * FROM products", [], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'product': result }).status(200);
        });
    }
    getCategorie(req, res) {
        database_1.default.query("SELECT * FROM products WHERE id=?", [req.params.id], (error, result, fields) => {
            if (error)
                res.send("falla al tratar de cargar los datos").status(500);
            res.json({ 'product': result }).status(200);
        });
    }
    store(req, res) {
        database_1.default.query("INSERT INTO products (id_category, name, description, price, time_preparate) VALUES (?, ?, ?, ?, ?)", [
            req.body.id_category,
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.time_preparate
        ], (error, result, fields) => {
            if (error)
                res.send({ "message": "falla al tratar de cargar los datos", 'error': error }).status(500);
            res.json({ 'product': result }).status(200);
        });
    }
}
const productsController = new ProductsController();
exports.default = productsController;
